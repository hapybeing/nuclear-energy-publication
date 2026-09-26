import os
import sys
import time
import threading
import http.server
import socketserver
import urllib.request

PORT = 8089
Handler = http.server.SimpleHTTPRequestHandler

# Set root directory to repository root dynamically
script_dir = os.path.dirname(os.path.abspath(__file__))
repo_root = os.path.dirname(script_dir)
os.chdir(repo_root)

def run_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()

server_thread = threading.Thread(target=run_server, daemon=True)
server_thread.start()
time.sleep(1)

# List of critical URLs to verify
test_paths = [
    '/',
    '/index.html',
    '/src/styles/main.css',
    '/src/main.js',
    '/src/components/Header.js',
    '/src/components/Footer.js',
    '/src/components/MetricStrip.js',
    '/src/pages/HomePage.js',
    '/src/pages/BenefitsPage.js',
    '/src/pages/HowItWorksPage.js',
    '/src/pages/SafetyPage.js',
    '/src/pages/EnvironmentPage.js',
    '/src/pages/TechnologyPage.js',
    '/src/pages/FuturePage.js',
    '/src/pages/LearnPage.js',
    '/src/data/citations.js',
    '/src/data/metrics.js',
    '/src/data/glossary.js',
    '/src/data/reactors.js',
    '/src/data/accidents.js',
    '/src/diagrams/fission-diagram.js',
    '/src/diagrams/steam-cycle-diagram.js',
    '/src/diagrams/defense-depth-diagram.js',
    '/src/diagrams/carbon-mortality-chart.js',
    '/src/diagrams/pellet-calculator.js',
    '/src/diagrams/dose-explorer.js',
    '/src/diagrams/fuel-cycle-diagram.js',
    '/public/images/hero-landscape.jpg',
    '/public/images/interior-solarpunk.jpg',
    '/public/images/plant-pipeline.jpg',
    '/public/images/env-mountains.jpg',
    '/public/images/env-forest.jpg',
    '/public/images/env-wildlife.jpg',
    '/public/images/future-sunset.jpg',
    '/public/icons/atom.svg'
]

print(f"Starting local HTTP server testing from {repo_root}...")
failed = []
for p in test_paths:
    url = f"http://localhost:{PORT}{p}"
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            size = len(resp.read())
            if status == 200 and size > 0:
                print(f"PASS: {p} ({size} bytes, status 200)")
            else:
                print(f"FAIL: {p} status {status}, size {size}")
                failed.append(p)
    except Exception as e:
        print(f"ERROR: {p} -> {e}")
        failed.append(p)

if failed:
    print(f"\nTest FAILED for {len(failed)} files: {failed}")
    sys.exit(1)
else:
    print(f"\nALL {len(test_paths)} FILES PASSED VERIFICATION WITH HTTP 200!")
