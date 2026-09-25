export const ACCIDENT_ANALYSES = [
  {
    id: "tmi",
    name: "Three Mile Island Unit 2 (TMI-2)",
    year: 1979,
    location: "Pennsylvania, United States",
    reactorType: "Babcock & Wilcox PWR (880 MWe)",
    inesLevel: 5,
    rootCauses: "Mechanical failure of a pilot-operated relief valve (PORV) that stuck open, compounded by ambiguous control-room instrumentation that led operators to erroneously shut down high-pressure injection safety water.",
    containmentPerformance: "The prestressed reinforced concrete containment building remained intact. Less than 1% of core radioactivity was vented, primarily inert noble gases (Xenon-133).",
    epidemiologicalHealthImpact: "Extensive health surveys by the Pennsylvania Department of Health, Columbia University, and the NRC found average public dose was ~0.014 mSv (1.4 mrem)—less than a single chest X-ray. No discernible increase in cancer incidence was found.",
    engineeringLegacy: "Catalyzed human factors engineering in control rooms, creation of the Institute of Nuclear Power Operations (INPO), standardized symptom-based Emergency Operating Procedures (EOPs), and mandatory simulator training."
  },
  {
    id: "chernobyl",
    name: "Chernobyl Unit 4",
    year: 1986,
    location: "Pripyat, Ukrainian SSR, Soviet Union",
    reactorType: "RBMK-1000 (Water-cooled, Graphite-moderated, 1,000 MWe)",
    inesLevel: 7,
    rootCauses: "Flawed reactor design featuring a positive void coefficient at low power, control rods with graphite displacement tips that caused a prompt positive reactivity surge upon insertion, and gross violations of safety procedures during an unauthorized turbine rundown test.",
    containmentPerformance: "The RBMK design lacked a Western-standard secondary containment structure. The steam explosion ruptured the top biological shield (Elena), exposing burning core graphite directly to the open atmosphere for ten days.",
    epidemiologicalHealthImpact: "UNSCEAR documents 28 liquidators died in 1986 from Acute Radiation Sickness (ARS). In the general population, ingestion of milk contaminated with Iodine-131 caused ~5,000 pediatric thyroid cancer cases (operable; ~15 fatalities). No radiation-induced hereditary defects or generalized population leukemia surges were detected.",
    engineeringLegacy: "Fundamental decommissioning of unsafe operational regimes, physical retrofit of all remaining RBMK control rods and fuel enrichment to eliminate positive void coefficients, and global adoption of the IAEA Convention on Nuclear Safety."
  },
  {
    id: "fukushima",
    name: "Fukushima Daiichi Units 1–4",
    year: 2011,
    location: "Fukushima Prefecture, Japan",
    reactorType: "GE BWR-3 and BWR-4 with Mark I Containment",
    inesLevel: 7,
    rootCauses: "A magnitude 9.1 Great East Japan Earthquake followed 41 minutes later by a 14-meter tsunami that overtopped the plant's 5.7-meter seawall. The tsunami flooded and disabled emergency diesel generators and electrical switchgear, causing an extended Station Blackout (SBO) with total loss of ultimate heat sink.",
    containmentPerformance: "Primary steel containments held against initial shock, but depressurization delays led to zirconium-water steam reactions generating hydrogen gas, which leaked into secondary reactor building superstructures and detonated.",
    epidemiologicalHealthImpact: "UNSCEAR (2020/2021) and WHO concluded that zero direct radiation deaths occurred, and no discernible increase in cancer rates is expected. However, the chaotic government-mandated evacuation of vulnerable hospitalized elderly citizens caused approximately 2,200 non-radiological evacuation-related deaths.",
    engineeringLegacy: "Global 'stress tests', mandatory installation of passive autocatalytic hydrogen recombiners (PARs), hardened filtered containment venting systems (FCVS), and watertight deployment of mobile emergency power and pumping equipment (FLEX doctrine)."
  }
];
