/**
 * Browser-based internet speed test using Cloudflare's speed endpoints.
 * Measures ping, download, and upload speeds.
 */
class SpeedTest {
  constructor(options = {}) {
    this.onProgress = options.onProgress || (() => {});
    this.onComplete = options.onComplete || (() => {});
    this.onError = options.onError || (() => {});
    this.running = false;
    this.baseUrl = 'https://speed.cloudflare.com';
  }

  async start() {
    if (this.running) return;
    this.running = true;

    try {
      this.onProgress({ phase: 'ping', progress: 0, ping: null, download: null, upload: null });

      const ping = await this.measurePing();
      this.onProgress({ phase: 'ping', progress: 100, ping, download: null, upload: null });

      this.onProgress({ phase: 'download', progress: 0, ping, download: null, upload: null });
      const download = await this.measureDownload(ping);
      this.onProgress({ phase: 'download', progress: 100, ping, download, upload: null });

      this.onProgress({ phase: 'upload', progress: 0, ping, download, upload: null });
      const upload = await this.measureUpload(ping, download);
      this.onProgress({ phase: 'upload', progress: 100, ping, download, upload });

      this.onComplete({ ping, download, upload });
    } catch (err) {
      this.onError(err.message || 'Speed test failed. Check your connection and try again.');
    } finally {
      this.running = false;
    }
  }

  async measurePing() {
    const samples = [];
    for (let i = 0; i < 5; i++) {
      const start = performance.now();
      await fetch(`${this.baseUrl}/__down?bytes=0`, { cache: 'no-store', mode: 'cors' });
      samples.push(performance.now() - start);
    }
    samples.sort((a, b) => a - b);
    return Math.round(samples[Math.floor(samples.length / 2)]);
  }

  async measureDownload(ping) {
    const testDuration = 8000;
    const chunkSize = 1000000;
    let totalBytes = 0;
    const start = performance.now();

    while (performance.now() - start < testDuration) {
      const response = await fetch(`${this.baseUrl}/__down?bytes=${chunkSize}`, { cache: 'no-store', mode: 'cors' });
      const buffer = await response.arrayBuffer();
      totalBytes += buffer.byteLength;

      const elapsed = (performance.now() - start) / 1000;
      const mbps = (totalBytes * 8) / (elapsed * 1000000);
      const progress = Math.min(99, ((performance.now() - start) / testDuration) * 100);
      this.onProgress({ phase: 'download', progress, ping, download: Math.round(mbps * 10) / 10, upload: null });
    }

    const elapsed = (performance.now() - start) / 1000;
    return Math.round((totalBytes * 8) / (elapsed * 1000000) * 10) / 10;
  }

  async measureUpload(ping, download) {
    const testDuration = 6000;
    const chunkSize = 1000000;
    const payload = new Uint8Array(chunkSize);
    let totalBytes = 0;
    const start = performance.now();

    while (performance.now() - start < testDuration) {
      await fetch(`${this.baseUrl}/__up`, {
        method: 'POST',
        body: payload,
        mode: 'cors',
        cache: 'no-store'
      });
      totalBytes += chunkSize;

      const elapsed = (performance.now() - start) / 1000;
      const mbps = (totalBytes * 8) / (elapsed * 1000000);
      const progress = Math.min(99, ((performance.now() - start) / testDuration) * 100);
      this.onProgress({ phase: 'upload', progress, ping, download, upload: Math.round(mbps * 10) / 10 });
    }

    const elapsed = (performance.now() - start) / 1000;
    return Math.round((totalBytes * 8) / (elapsed * 1000000) * 10) / 10;
  }
}

function initSpeedTestWidget(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const gauge = container.querySelector('.speed-gauge-value');
  const unit = container.querySelector('.speed-gauge-unit');
  const phaseLabel = container.querySelector('.speed-phase-label');
  const progressBar = container.querySelector('.speed-progress-bar');
  const startBtn = container.querySelector('.speed-start-btn');
  const resultsEl = container.querySelector('.speed-results');
  const errorEl = container.querySelector('.speed-error');

  const pingEl = container.querySelector('[data-metric="ping"]');
  const downloadEl = container.querySelector('[data-metric="download"]');
  const uploadEl = container.querySelector('[data-metric="upload"]');

  const test = new SpeedTest({
    onProgress({ phase, progress, ping, download, upload }) {
      if (errorEl) errorEl.hidden = true;
      if (resultsEl) resultsEl.hidden = true;

      const phaseLabels = {
        ping: 'Measuring latency…',
        download: 'Testing download speed…',
        upload: 'Testing upload speed…'
      };
      if (phaseLabel) phaseLabel.textContent = phaseLabels[phase];

      if (progressBar) progressBar.style.width = `${progress}%`;

      if (phase === 'ping' && gauge) {
        gauge.textContent = ping ?? '—';
        if (unit) unit.textContent = 'ms ping';
      } else if (phase === 'download' && gauge) {
        gauge.textContent = download ?? '—';
        if (unit) unit.textContent = 'Mbps download';
      } else if (phase === 'upload' && gauge) {
        gauge.textContent = upload ?? '—';
        if (unit) unit.textContent = 'Mbps upload';
      }
    },
    onComplete({ ping, download, upload }) {
      if (progressBar) progressBar.style.width = '100%';
      if (phaseLabel) phaseLabel.textContent = 'Test complete';
      if (gauge) gauge.textContent = download;
      if (unit) unit.textContent = 'Mbps download';

      if (pingEl) pingEl.textContent = `${ping} ms`;
      if (downloadEl) downloadEl.textContent = `${download} Mbps`;
      if (uploadEl) uploadEl.textContent = `${upload} Mbps`;
      if (resultsEl) resultsEl.hidden = false;

      if (startBtn) {
        startBtn.textContent = 'Run Again';
        startBtn.disabled = false;
      }
    },
    onError(message) {
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.hidden = false;
      }
      if (phaseLabel) phaseLabel.textContent = 'Test failed';
      if (startBtn) {
        startBtn.textContent = 'Try Again';
        startBtn.disabled = false;
      }
    }
  });

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;
      startBtn.textContent = 'Testing…';
      if (progressBar) progressBar.style.width = '0%';
      if (resultsEl) resultsEl.hidden = true;
      if (errorEl) errorEl.hidden = true;
      if (gauge) gauge.textContent = '—';
      test.start();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSpeedTestWidget('speedTestWidget');
  initSpeedTestWidget('speedTestPageWidget');
});
