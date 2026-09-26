# ⚛️ Nuclear Energy: Cleaner Planet. Brighter Tomorrow.

> **An authoritative, peer-reviewed educational publication exploring fission physics, thermodynamic power cycles, defense-in-depth safety engineering, lifecycle ecology, and next-generation reactor systems.**

[![Live Website](https://img.shields.io/badge/Live_Site-hapybeing.github.io%2Fnuclear--energy--publication-173826?style=for-the-badge&logo=githubpages&logoColor=white)](https://hapybeing.github.io/nuclear-energy-publication/)
[![CI Status](https://img.shields.io/badge/Integrity_Suite-Passing-235238?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/hapybeing/nuclear-energy-publication/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-BF9329?style=for-the-badge)](LICENSE)

---

## 🌐 Live Production Deployment
* **Official URL:** [https://hapybeing.github.io/nuclear-energy-publication/](https://hapybeing.github.io/nuclear-energy-publication/)
* **Direct Navigation:** Click the link above to explore all 8 publication acts, interactive physics simulators, dosimetry benchmarks, and primary citation libraries in any modern desktop or mobile browser.

---

## 🏛️ Design Philosophy: SolarPunk + Scientific Editorial
* **Atmosphere:** Harmonious coexistence of high-technology energy infrastructure with pristine alpine ecosystems, verdant forests, and vibrant human civilization.
* **Palette:** Warm ivory (`#FAF8F5`), deep botanical forest greens (`#0B1E14`, `#173826`), restrained brushed brass (`#C59B27`, `#BF9329`), and charcoal typography (`#141A16`, `#354039`).
* **Typography:** Elegant high-contrast serif display (`Newsreader`) paired with modern, crisp geometric sans-serif body typography (`Plus Jakarta Sans`) and tabular technical numerals (`JetBrains Mono`).
* **Zero AI-Slop:** Every visual element serves a clear communicative purpose; zero generic card clutter, meaningless neon glows, or stock clip-art.

---

## 🔬 Scientific Rigor & Data Traceability
All quantitative metrics, mortality rates, and lifecycle emissions presented across this publication are grounded in multilateral institutions and peer-reviewed literature:
1. **Lifecycle Greenhouse Gas Emissions:** UNECE (2021) *Life Cycle Assessment of Electricity Generation Options* (5.1–12 g CO₂-eq/kWh) and IPCC AR6 Working Group III (2022) Chapter 6 & Annex III.
2. **Comparative Mortality per TWh:** Markandya & Wilkinson (*The Lancet*, 2007) and Our World in Data (University of Oxford, 2024).
3. **Capacity Factors:** U.S. Energy Information Administration (EIA) Electric Power Monthly (2023) Table 6.07.B (92.6% average operating factor).
4. **Historical Accident Epidemiology:** United Nations Scientific Committee on the Effects of Atomic Radiation (UNSCEAR 2020/2021) and World Health Organization (WHO 2013).
5. **Deep Geological Waste Isolation:** Posiva Oy (2023) *Safety Case for the Operating Licence of the Encapsulation Plant and Final Disposal Facility (Onkalo)*.

---

## 📖 Complete Platform Architecture (8 Primary Pages)

| Section | Route | Focus Areas |
| :--- | :--- | :--- |
| **Home** | `#/` | 12-act narrative unfolding from atomic physics to global ecological preservation and honest economic realities. |
| **Benefits** | `#/benefits` | Quantitative breakdown of air pollution avoidance, grid inertia, capacity factors, and critical mineral economy. |
| **How It Works** | `#/how-it-works` | Isotope physics ($^{235}\text{U}$ vs $^{238}\text{U}$), delayed neutron kinetics, self-stabilizing negative temperature coefficients, and closed-loop thermodynamic Rankine cycles. |
| **Safety** | `#/safety` | Concentric physical barrier defense-in-depth, Gen III+ passive walk-away cooling systems, radiation dosimetry, and transparent historical post-mortems. |
| **Environment** | `#/environment` | UNECE lifecycle analysis across 14 environmental indicators, land footprint efficiency (1.8 km²/GW), and permanent deep geological repositories. |
| **Technology** | `#/technology` | Interactive directory comparing PWR, BWR, SMRs, High-Temperature Gas Reactors (HTGR), Molten Salt (MSR), Sodium Fast (SFR), and Fusion. |
| **Future** | `#/future` | Industrial deep decarbonization: high-temperature steam electrolysis (SOEC) for clean hydrogen, district heating, and municipal desalination. |
| **Learn** | `#/learn` | Interactive learning hub with a searchable nuclear terminology glossary and traceable primary citations index. |

---

## 🛠️ Interactive Scientific Simulators
1. **Induced Fission & Scission Simulator:** Real-time canvas simulation of neutron capture on $^{235}\text{U}$, compound $^{236}\text{U}^*$ deformation, fission fragments ($^{141}\text{Ba}$, $^{92}\text{Kr}$), prompt neutron ejection, and ~200.2 MeV energy release.
2. **Three-Loop PWR Thermodynamic Cycle:** Interactive technical schematic showing primary loop, secondary turbine expansion, and tertiary cooling tower loops with live temperature, pressure, and role inspection.
3. **Defense in Depth 5-Barrier Explorer:** Layer-by-layer exploration of fuel pellet matrix, zircaloy cladding, reactor pressure vessel, prestressed concrete containment, and exclusion perimeter.
4. **Fuel Pellet Density Equivalency Calculator:** Interactive slider calculating equivalent coal, oil, natural gas, and avoided CO₂ emissions for any quantity of standard 7-gram ceramic uranium pellets.
5. **Radiation Dosimetry Benchmark:** Logarithmic comparative scale contextualizing everyday natural background, dental X-rays, transatlantic flights, and regulatory safety limits.
6. **Energy System Comparison Chart:** Dynamic multi-metric benchmark comparing Nuclear, Wind, Solar PV, Hydro, Gas, and Coal across carbon intensity, mortality, land footprint, and capacity factors.

---

## 🚀 Deployment & Local Execution
The platform is designed with a modern native ES module architecture requiring zero build steps or compilation overhead:

```bash
# Clone the repository
git clone https://github.com/hapybeing/nuclear-energy-publication.git
cd nuclear-energy-publication

# Start local preview server
python3 -m http.server 8080

# Open http://localhost:8080 in your browser
```

### Continuous Integration
Application integrity and asset routing are continuously verified via GitHub Actions (`.github/workflows/deploy.yml`) running the automated verification test harness (`scripts/test_site.py`).
