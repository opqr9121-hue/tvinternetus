<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Internet Speed Test | TV Internet US</title>

<meta name="description" content="Test your internet connection speed, including download speed, upload speed, ping, and jitter.">

<link rel="canonical" href="https://tvinternetus.com/pages/speed-test.html">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Inter, Arial, sans-serif;
    color: #172033;
    background: #f5f8fc;
}

/* HEADER */

.site-header {
    background: #ffffff;
    border-bottom: 1px solid #e5eaf1;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-inner {
    max-width: 1180px;
    margin: auto;
    padding: 16px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    text-decoration: none;
    color: #123b7a;
    font-size: 20px;
    font-weight: 800;
}

.logo span {
    color: #2563eb;
}

.main-nav {
    display: flex;
    gap: 26px;
}

.main-nav a {
    text-decoration: none;
    color: #475569;
    font-size: 14px;
    font-weight: 600;
}

.main-nav a:hover {
    color: #2563eb;
}

/* HERO */

.hero {
    background:
        radial-gradient(circle at 50% 0%, rgba(37,99,235,.14), transparent 45%),
        linear-gradient(180deg, #eef5ff 0%, #f5f8fc 100%);
    padding: 60px 20px 35px;
    text-align: center;
}

.hero-badge {
    display: inline-block;
    background: #e6efff;
    color: #1d4ed8;
    padding: 7px 13px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 15px;
}

.hero h1 {
    margin: 0;
    font-size: 42px;
    line-height: 1.15;
    color: #0f2540;
}

.hero p {
    max-width: 650px;
    margin: 15px auto 0;
    color: #64748b;
    font-size: 16px;
    line-height: 1.7;
}

/* TEST CARD */

.test-section {
    padding: 20px 20px 60px;
}

.test-card {
    max-width: 900px;
    margin: -10px auto 0;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 24px;
    box-shadow: 0 18px 50px rgba(15, 23, 42, .10);
    padding: 38px;
}

/* GAUGE */

.gauge-area {
    text-align: center;
    padding: 15px 0 25px;
}

.gauge {
    width: 250px;
    height: 250px;
    margin: auto;
    border-radius: 50%;
    background:
        conic-gradient(
            #2563eb 0deg,
            #2563eb var(--progress),
            #e8eef7 var(--progress),
            #e8eef7 360deg
        );
    padding: 12px;
    transition: background .3s ease;
}

.gauge-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: inset 0 0 0 1px #eef2f7;
}

.speed-number {
    font-size: 48px;
    font-weight: 800;
    color: #0f2540;
    line-height: 1;
}

.speed-unit {
    font-size: 14px;
    color: #64748b;
    margin-top: 8px;
    font-weight: 600;
}

.test-status {
    margin-top: 18px;
    color: #64748b;
    font-size: 14px;
    font-weight: 600;
}

/* METRICS */

.metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 10px;
}

.metric {
    background: #f8fafc;
    border: 1px solid #e8edf4;
    border-radius: 14px;
    padding: 18px;
    text-align: center;
}

.metric-label {
    color: #64748b;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .04em;
}

.metric-value {
    margin-top: 8px;
    font-size: 25px;
    font-weight: 800;
    color: #0f2540;
}

.metric-unit {
    font-size: 12px;
    color: #64748b;
    margin-left: 3px;
}

/* BUTTON */

.button-area {
    text-align: center;
    margin-top: 28px;
}

.start-button {
    border: 0;
    background: #2563eb;
    color: white;
    font-family: inherit;
    font-size: 16px;
    font-weight: 800;
    padding: 15px 34px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(37, 99, 235, .25);
    transition: .2s ease;
}

.start-button:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
}

.start-button:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
}

/* PROGRESS */

.progress-wrap {
    margin-top: 25px;
    display: none;
}

.progress-bar {
    height: 7px;
    background: #e8edf4;
    border-radius: 20px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    width: 0%;
    background: #2563eb;
    border-radius: 20px;
    transition: width .25s ease;
}

/* RESULT MESSAGE */

.result-message {
    display: none;
    margin-top: 25px;
    padding: 18px;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 12px;
    color: #1e3a8a;
    font-size: 14px;
    line-height: 1.6;
}

/* INFO */

.info-section {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px 60px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.info-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 24px;
}

.info-icon {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: #eff6ff;
    color: #2563eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 15px;
}

.info-card h3 {
    margin: 0 0 8px;
    font-size: 17px;
    color: #0f2540;
}

.info-card p {
    margin: 0;
    color: #64748b;
    font-size: 13px;
    line-height: 1.7;
}

/* CTA */

.cta {
    max-width: 900px;
    margin: 0 auto 60px;
    padding: 0 20px;
}

.cta-box {
    background: linear-gradient(135deg, #123b7a, #2563eb);
    border-radius: 20px;
    padding: 35px;
    color: white;
    text-align: center;
}

.cta-box h2 {
    margin: 0 0 10px;
    font-size: 25px;
}

.cta-box p {
    margin: 0 auto 20px;
    max-width: 600px;
    color: rgba(255,255,255,.82);
    line-height: 1.6;
    font-size: 14px;
}

.cta-button {
    display: inline-block;
    background: white;
    color: #1d4ed8;
    text-decoration: none;
    font-weight: 800;
    padding: 12px 20px;
    border-radius: 9px;
}

/* FOOTER */

.site-footer {
    background: #0f172a;
    color: #cbd5e1;
    padding: 30px 20px;
    text-align: center;
}

.site-footer p {
    margin: 5px 0;
    font-size: 12px;
}

/* MOBILE */

@media (max-width: 700px) {

    .main-nav {
        display: none;
    }

    .hero {
        padding: 45px 18px 30px;
    }

    .hero h1 {
        font-size: 32px;
    }

    .test-card {
        padding: 24px 18px;
        border-radius: 18px;
    }

    .gauge {
        width: 210px;
        height: 210px;
    }

    .speed-number {
        font-size: 40px;
    }

    .metrics {
        grid-template-columns: 1fr;
    }

    .info-grid {
        grid-template-columns: 1fr;
    }

    .cta-box {
        padding: 28px 20px;
    }
}
</style>
</head>

<body>

<!-- HEADER -->

<header class="site-header">
    <div class="header-inner">

        <a href="../index.html" class="logo">
            TV Internet <span>US</span>
        </a>

        <nav class="main-nav">
            <a href="../index.html">Home</a>
            <a href="../index.html#providers">Providers</a>
            <a href="guide.html">Guides</a>
            <a href="speed-test.html">Speed Test</a>
        </nav>

    </div>
</header>


<!-- HERO -->

<section class="hero">

    <div class="hero-badge">
        FREE INTERNET SPEED TEST
    </div>

    <h1>How Fast Is Your Internet?</h1>

    <p>
        Test your download speed, upload speed, ping and connection quality
        directly from your browser.
    </p>

</section>


<!-- SPEED TEST -->

<section class="test-section">

    <div class="test-card">

        <div class="gauge-area">

            <div class="gauge" id="gauge">

                <div class="gauge-inner">

                    <div class="speed-number" id="speedNumber">
                        0
                    </div>

                    <div class="speed-unit">
                        Mbps
                    </div>

                </div>

            </div>

            <div class="test-status" id="status">
                Ready to test your connection
            </div>

        </div>


        <!-- METRICS -->

        <div class="metrics">

            <div class="metric">

                <div class="metric-label">
                    Download
                </div>

                <div class="metric-value">
                    <span id="downloadResult">—</span>
                    <span class="metric-unit">Mbps</span>
                </div>

            </div>


            <div class="metric">

                <div class="metric-label">
                    Upload
                </div>

                <div class="metric-value">
                    <span id="uploadResult">—</span>
                    <span class="metric-unit">Mbps</span>
                </div>

            </div>


            <div class="metric">

                <div class="metric-label">
                    Ping
                </div>

                <div class="metric-value">
                    <span id="pingResult">—</span>
                    <span class="metric-unit">ms</span>
                </div>

            </div>

        </div>


        <!-- BUTTON -->

        <div class="button-area">

            <button
                class="start-button"
                id="startButton"
                onclick="startTest()"
            >
                Start Speed Test
            </button>

        </div>


        <!-- PROGRESS -->

        <div class="progress-wrap" id="progressWrap">

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    id="progressFill"
                ></div>

            </div>

        </div>


        <!-- RESULT MESSAGE -->

        <div
            class="result-message"
            id="resultMessage"
        ></div>

    </div>

</section>


<!-- EXPLANATION -->

<section class="info-section">

    <div class="info-grid">

        <div class="info-card">

            <div class="info-icon">
                ↓
            </div>

            <h3>Download Speed</h3>

            <p>
                Measures how quickly data can be downloaded to your device.
                Higher Mbps generally means faster streaming, browsing and downloads.
            </p>

        </div>


        <div class="info-card">

            <div class="info-icon">
                ↑
            </div>

            <h3>Upload Speed</h3>

            <p>
                Measures how quickly your device can send data.
                Upload speed matters for video calls, cloud backups and uploading files.
            </p>

        </div>


        <div class="info-card">

            <div class="info-icon">
                ◉
            </div>

            <h3>Ping</h3>

            <p>
                Ping measures response time between your device and the test server.
                Lower latency is generally better for gaming and video calls.
            </p>

        </div>

    </div>

</section>


<!-- CTA -->

<section class="cta">

    <div class="cta-box">

        <h2>Looking for faster internet?</h2>

        <p>
            Compare internet providers available in your area and find plans
            that may offer faster speeds.
        </p>

        <a
            href="../index.html#providers"
            class="cta-button"
        >
            Compare Internet Providers
        </a>

    </div>

</section>


<!-- FOOTER -->

<footer class="site-footer">

    <p>
        © 2026 TV Internet US. All rights reserved.
    </p>

    <p>
        Speed-test results are estimates and can vary based on device,
        Wi-Fi conditions, network congestion and server location.
    </p>

</footer>


<script>

/*
========================================================
TV INTERNET US - BROWSER SPEED TEST
========================================================

Uses Cloudflare's public speed-test endpoints:

Download:
https://speed.cloudflare.com/__down

Upload:
https://speed.cloudflare.com/__up

No API key is required.
========================================================
*/


const DOWNLOAD_URL =
    "https://speed.cloudflare.com/__down";

const UPLOAD_URL =
    "https://speed.cloudflare.com/__up";


const speedNumber =
    document.getElementById("speedNumber");

const downloadResult =
    document.getElementById("downloadResult");

const uploadResult =
    document.getElementById("uploadResult");

const pingResult =
    document.getElementById("pingResult");

const statusText =
    document.getElementById("status");

const startButton =
    document.getElementById("startButton");

const gauge =
    document.getElementById("gauge");

const progressWrap =
    document.getElementById("progressWrap");

const progressFill =
    document.getElementById("progressFill");

const resultMessage =
    document.getElementById("resultMessage");


function setProgress(value) {

    value = Math.max(0, Math.min(100, value));

    progressFill.style.width =
        value + "%";

}


function setGauge(mbps) {

    const maxGaugeSpeed = 1000;

    let percentage =
        Math.min(mbps / maxGaugeSpeed, 1);

    let degrees =
        percentage * 360;

    gauge.style.setProperty(
        "--progress",
        degrees + "deg"
    );

    speedNumber.textContent =
        Math.round(mbps);

}


function formatSpeed(value) {

    if (!isFinite(value)) {
        return "0.00";
    }

    return value.toFixed(2);

}


/* ----------------------------------------
   PING TEST
----------------------------------------- */

async function testPing() {

    const results = [];

    statusText.textContent =
        "Testing ping...";

    for (let i = 0; i < 8; i++) {

        const start =
            performance.now();

        try {

            await fetch(
                DOWNLOAD_URL +
                "?measId=" +
                Date.now() +
                "_" +
                i +
                "&bytes=1&cache=" +
                Math.random(),
                {
                    method: "GET",
                    cache: "no-store",
                    mode: "cors"
                }
            );

            const end =
                performance.now();

            results.push(end - start);

        } catch (error) {

            console.log(
                "Ping request failed:",
                error
            );

        }

        setProgress(5 + i * 2);

    }


    if (!results.length) {

        return {
            ping: 0,
            jitter: 0
        };

    }


    const average =
        results.reduce(
            (a, b) => a + b,
            0
        ) / results.length;


    let jitterTotal = 0;

    for (let i = 1; i < results.length; i++) {

        jitterTotal +=
            Math.abs(
                results[i] -
                results[i - 1]
            );

    }


    const jitter =
        results.length > 1
            ? jitterTotal / (results.length - 1)
            : 0;


    pingResult.textContent =
        Math.round(average);


    return {
        ping: average,
        jitter: jitter
    };

}


/* ----------------------------------------
   DOWNLOAD TEST
----------------------------------------- */

async function testDownload() {

    statusText.textContent =
        "Testing download speed...";


    /*
       Several file sizes are tested.
       This gives the browser time to reach
       a stable transfer rate.
    */

    const sizes = [
        1000000,
        3000000,
        6000000,
        10000000
    ];


    let bestMbps = 0;


    for (let i = 0; i < sizes.length; i++) {

        const bytes =
            sizes[i];

        const url =
            DOWNLOAD_URL +
            "?measId=" +
            Date.now() +
            "&bytes=" +
            bytes +
            "&cache=" +
            Math.random();


        try {

            const start =
                performance.now();


            const response =
                await fetch(
                    url,
                    {
                        cache: "no-store",
                        mode: "cors"
                    }
                );


            if (!response.ok) {
                throw new Error(
                    "Download request failed"
                );
            }


            const data =
                await response.arrayBuffer();


            const end =
                performance.now();


            const seconds =
                (end - start) / 1000;


            const megabits =
                (data.byteLength * 8) / 1000000;


            const mbps =
                megabits / seconds;


            if (mbps > bestMbps) {

                bestMbps =
                    mbps;

            }


            downloadResult.textContent =
                formatSpeed(bestMbps);


            setGauge(bestMbps);


            setProgress(
                20 + ((i + 1) * 15)
            );


        } catch (error) {

            console.log(
                "Download test failed:",
                error
            );

        }

    }


    return bestMbps;

}


/* ----------------------------------------
   UPLOAD TEST
----------------------------------------- */

async function testUpload() {

    statusText.textContent =
        "Testing upload speed...";


    let bestMbps = 0;


    const sizes = [
        1000000,
        3000000,
        5000000
    ];


    for (let i = 0; i < sizes.length; i++) {

        const size =
            sizes[i];


        /*
           Generate random data.
        */

        const data =
            new Uint8Array(size);


        crypto.getRandomValues(
            data.subarray(
                0,
                Math.min(size, 65536)
            )
        );


        /*
           Fill remaining data using
           repeating random chunks.
        */

        if (size > 65536) {

            const chunk =
                new Uint8Array(65536);

            crypto.getRandomValues(chunk);

            for (
                let offset = 0;
                offset < size;
                offset += 65536
            ) {

                data.set(
                    chunk.subarray(
                        0,
                        Math.min(
                            65536,
                            size - offset
                        )
                    ),
                    offset
                );

            }

        }


        try {

            const start =
                performance.now();


            await fetch(
                UPLOAD_URL +
                "?measId=" +
                Date.now() +
                "_" +
                i +
                "&cache=" +
                Math.random(),
                {
                    method: "POST",
                    body: data,
                    cache: "no-store",
                    mode: "cors"
                }
            );


            const end =
                performance.now();


            const seconds =
                (end - start) / 1000;


            const megabits =
                (size * 8) / 1000000;


            const mbps =
                megabits / seconds;


            if (mbps > bestMbps) {

                bestMbps =
                    mbps;

            }


            uploadResult.textContent =
                formatSpeed(bestMbps);


            setProgress(
                65 + ((i + 1) * 10)
            );


        } catch (error) {

            console.log(
                "Upload test failed:",
                error
            );

        }

    }


    return bestMbps;

}


/* ----------------------------------------
   MAIN TEST
----------------------------------------- */

async function startTest() {

    if (startButton.disabled) {
        return;
    }


    startButton.disabled =
        true;

    startButton.textContent =
        "Testing...";


    progressWrap.style.display =
        "block";


    resultMessage.style.display =
        "none";


    downloadResult.textContent =
        "—";

    uploadResult.textContent =
        "—";

    pingResult.textContent =
        "—";


    speedNumber.textContent =
        "0";


    setProgress(2);


    try {

        /*
           1. Ping
        */

        const pingData =
            await testPing();


        /*
           2. Download
        */

        const download =
            await testDownload();


        /*
           3. Upload
        */

        const upload =
            await testUpload();


        setProgress(100);


        statusText.textContent =
            "Speed test complete";


        /*
           Final display
        */

        if (download > 0) {

            setGauge(download);

        }


        /*
           Quality message
        */

        let quality =
            "";


        if (download >= 100) {

            quality =
                "Excellent connection. Your connection should handle 4K streaming, gaming, video calls and multiple connected devices.";

        } else if (download >= 50) {

            quality =
                "Good connection. This should comfortably handle HD streaming, video calls and normal household use.";

        } else if (download >= 25) {

            quality =
                "Fair connection. It should handle normal browsing and HD streaming, although multiple devices may reduce performance.";

        } else if (download > 0) {

            quality =
                "Your connection is relatively slow. You may notice slower downloads and streaming, especially with multiple devices.";

        } else {

            quality =
                "The test could not complete normally. Please try again.";

        }


        resultMessage.innerHTML =
            "<strong>Test complete.</strong><br>" +
            quality +
            "<br><br>" +
            "Ping: " +
            Math.round(pingData.ping) +
            " ms &nbsp; | &nbsp; " +
            "Jitter: " +
            Math.round(pingData.jitter) +
            " ms";


        resultMessage.style.display =
            "block";


    } catch (error) {

        console.error(
            "Speed test error:",
            error
        );


        statusText.textContent =
            "Test could not be completed";


        resultMessage.innerHTML =
            "<strong>Something went wrong.</strong><br>" +
            "Please check your internet connection and try the test again.";


        resultMessage.style.display =
            "block";

    }


    startButton.disabled =
        false;


    startButton.textContent =
        "Run Test Again";

}


/* ----------------------------------------
   INITIAL GAUGE
----------------------------------------- */

gauge.style.setProperty(
    "--progress",
    "0deg"
);

</script>

</body>
</html>
