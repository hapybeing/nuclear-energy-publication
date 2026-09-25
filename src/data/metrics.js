export const SYSTEM_METRICS = {
  lifecycleCarbon: {
    nuclearMedian: 12, // g CO2-eq/kWh (IPCC AR6 WG3)
    nuclearRange: [5.1, 12], // UNECE 2021 modern PWR to global
    windOffshore: 12,
    windOnshore: 11,
    solarRooftop: 41,
    solarUtility: 48,
    naturalGasCC: 490,
    coalStandard: 820
  },
  mortalityRatePerTWh: {
    nuclear: 0.03, // Deaths per TWh (Our World in Data, Lancet)
    wind: 0.04,
    solar: 0.04,
    hydro: 0.24,
    naturalGas: 2.82,
    biomass: 4.63,
    oil: 18.43,
    coal: 24.62
  },
  landUseFootprint: {
    // m² per MWh (UNECE 2021 direct & lifecycle)
    nuclear: 0.1,
    wind: 1.0, // direct footprint; with spacing up to 99 m²
    solarPV: 2.1,
    coal: 0.2,
    hydro: 5.4
  },
  capacityFactorPercent: {
    nuclear: 92.6, // US EIA 2023 average
    geothermal: 72.1,
    naturalGasCC: 56.6,
    coal: 42.1,
    wind: 35.4,
    solarPV: 24.8
  },
  energyDensity: {
    // 1 standard uranium fuel pellet (7g UO2, ~3.5% U-235)
    uraniumPelletGrams: 7,
    coalEquivKg: 1000, // 1 metric ton
    oilEquivLiters: 564, // ~3.5 barrels / 149 gallons
    gasEquivCubicMeters: 480 // ~17,000 cu ft
  }
};
