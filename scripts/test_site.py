import urllib.request
import threading
import http.server
import socketserver
import time
import sys
import os

PORT = 8095
Handler = http.server.SimpleHTTPRequestHandler
repo_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(repo_dir)

def run_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()

server_thread = threading.Thread(target=run_server, daemon=True)
server_thread.start()
time.sleep(1)

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
    '/src/data/images.js',
    '/src/diagrams/fission-diagram.js',
    '/src/diagrams/steam-cycle-diagram.js',
    '/src/diagrams/defense-depth-diagram.js',
    '/src/diagrams/carbon-mortality-chart.js',
    '/src/diagrams/pellet-calculator.js',
    '/src/diagrams/dose-explorer.js',
    '/src/diagrams/fuel-cycle-diagram.js',
    '/public/icons/atom.svg'
]

print(f"Starting test suite against {len(test_paths)} assets on port {PORT}...")
failed = []
for p in test_paths:
    url = f"http://localhost:{PORT}{p}"
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            size = len(resp.read())
            if status == 200 and size > 0:
                print(f"PASS: {p:38} ({size:6} bytes, status 200)")
            else:
                print(f"FAIL: {p:38} status {status}, size {size}")
                failed.append(p)
    except Exception as e:
        print(f"ERROR: {p} -> {e}")
        failed.append(p)

if failed:
    print(f"\nTest FAILED for {len(failed)} files: {failed}")
    sys.exit(1)
else:
    print(f"\nALL {len(test_paths)} ASSETS PASSED VERIFICATION WITH HTTP 200!")
