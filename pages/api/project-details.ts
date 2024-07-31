import type { NextApiRequest, NextApiResponse } from 'next'

import { ProjectDetailsResponseData } from '../../data/types'
import { SERVICES_ID, SCOPE_IDS } from '@/data/constants'

const projects: ProjectDetailsResponseData = [
  {
    id: 32,
    name: '(QHL706) Hotel 101 Libis',
    client: 'Megawide Construction Corporation',
    clientImg: 'c-megawide.jpg',
    city: 'Quezon City',
    location: '67 Swallow Dr, Quezon City, 1110 Metro Manila (Bridgetowne, Libis)',
    scope: [
      SCOPE_IDS.EXCAVATION,
      SCOPE_IDS.HAULING_AND_DISPOSAL,
      SCOPE_IDS.BACKFILING,
    ],
    startDate: '',
    endDate: '2024',
    status: 'On-going',
    fileNames: [
      '101-1.png',
      '101-2.jpg',
      '101-3.jpg',
      '101-4.jpg',
      '101-5.jpg',
    ],
    services: [],
    categories: [],
    scopeDescription: `The Project is a 26 storey building with a Land area of 2,547 sq.m. It has a 179 parking lots and amenities. Owner and Developer is Hotel of Asia, inc.`,
  },
  {
    id: 33,
    name: '(PLA705) Landers Aseana',
    client: 'Megawide Construction Corporation',
    clientImg: 'c-megawide.jpg',
    city: 'Parañaque City',
    location: 'J.W.Diokno Blvd., corner Bradco Ave., Parañaque City',
    scope: [
      SCOPE_IDS.SHEET_PILING,
      SCOPE_IDS.EXCAVATION,
      SCOPE_IDS.HAULING_AND_DISPOSAL,
      SCOPE_IDS.BACKFILING,
      SCOPE_IDS.PILE_HACKING,
      SCOPE_IDS.TRIMMING_DEWATERING,
      SCOPE_IDS.GRAVEL_BEDDING,
    ],
    startDate: '',
    endDate: '2024',
    status: 'On-going',
    fileNames: [
      'Landers-1.jpg',
      'Landers-2.jpg',
      'Landers-3.jpg',
      'Landers-4.jpg',
      'Landers-5.jpg',
    ],
    services: [],
    categories: [],
    scopeDescription: `Landers is a major membership shopping chain in the country with several branches in Metro Manila as well as in Cebu. Landers Superstores offer a wide array of local and international finds along with delectable in-house dining options. Landers Superstore aseana project has an area of 15,064 square meter parcel of land. `,
  },
  {
    id: 34,
    name: '(WCB363) Westside City Resort Devt (Site B) - Iconic Link Bridge',
    client: 'Megawide Construction Corporation',
    clientImg: 'c-megawide.jpg',
    city: 'Parañaque City',
    location: 'J.W. Diokno Blvd, Tambo, Parañaque City',
    scope: [
      SCOPE_IDS.BORED_PILING,
    ],
    startDate: 'February 2024',
    endDate: 'February 2024',
    status: 'Completed',
    fileNames: [
      'Iconic-1.jpg',
      'Iconic-2.jpg',
      'Iconic-3.jpg',
      'Iconic-4.jpg',
      'Iconic-5.jpg',
      'Iconic-6.jpg',
      'Iconic-7.jpg',
      'Iconic-8.jpg',
    ],
    services: [],
    categories: [],
    scopeDescription: `Bored Piling of D1600mm x 30m with Full Steel Casing.\n
      The Project is a connecting link bridge of 2 buildings, the Westside City Resort and Grand Westside Hotel.`,
  },
  {
    id: 12,
    name: 'Parqal Pile Driving',
    client: 'D.M. Wenceslao and Associates, Inc.',
    clientImg: 'c-dmwai.jpg',
    city: 'Parañaque City',
    location: 'Block 5, Aseana City, Parañaque City',
    scope: [
      SCOPE_IDS.LABOR,
      SCOPE_IDS.PILE_DRIVING,
      SCOPE_IDS.EQUIP_PILE_DRIVE,
    ],
    startDate: 'December 2018',
    endDate: 'April 2019',
    fileNames: [
      // 'Parqal-feature.jpg',
      'Parqal-feature2.jpg',
      'Parqal-7.JPG',
      'Parqal-5.JPG',
      'Parqal-6.JPG',
      'Parqal-1.JPG',
      'Parqal-2.JPG',
      'Parqal-3.JPG',
      'Parqal-4.JPG',
    ],
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
    categories: [
      'Pile Driving',
      'Structural',
      'Building',
    ],
    // scopeDescription: 'Pile driving works of 3,200 positions Concrete Piles',
    scopeDescription: `It is a five-hectare mixed-use campus development that has a gross floor area (GFA) of 78,000 sq.m.\n
      Foundation is composed of 3,200 postions 400mm x 400mm of concrete piles ranging form 11m to 18m.
    `,
  },
  {
    id: 8,
    name: 'Proposed Midpark Project',
    client: 'D.M. Wenceslao and Associates, Inc.',
    clientImg: 'c-dmwai.jpg',
    city: 'Parañaque City',
    location: 'Lot 50, 51 & 62 Blk 5, Aseana City, Parañaque City',
    scope: [
      SCOPE_IDS.SHEET_PILING,
    ],
    // scopeDescription: 'Design and Build of Sheet Piling Works for soil protection',
    scopeDescription: `Design and Build of Sheet Piling Works for soil protection\n
    MidPark Towers is a four-tower residential project located between Aseana City’s most integrated mixed-use development – Parqal and the company’s fourth office building – 8912 Asean Ave., which will have convenient access to the Ayala Malls Manila Bay through elevated walkways.\n
    Slope Protection are composed of Type 2 sheetpiles with a length from 12m to 18m, Soldier Piles using I-Beam, Bracing and Supports using steel I-beam. Depth of excavation is up to 12m depth at the STP area.
    `,
    startDate: 'January 2019',
    endDate: 'June 2019',
    fileNames: [
      // 'Midpark-feature.jpg',
      'Midpark-3.jpg',
      'Midpark-4.jpg',
      'Midpark-5.jpg',
      'Midpark-6.jpg',
      'Midpark-1.JPG',
      'Midpark-2.JPG',
    ],
    services: [
      SERVICES_ID.DESIGN_AND_BUILD,
      SERVICES_ID.SHEET_PILING,
    ],
    categories: [
      'Structural',
      'Building',
    ],
  },
  {
    id: 4,
    name: 'Westside City Phase 1 - Site B',
    client: 'Megawide Construction Corporation',
    clientImg: 'c-megawide.jpg',
    city: 'Parañaque City',
    location: 'Lot 5&6 Jose W. Diokno, Brgy. Tambo, Parañaque City',
    scope: [
      SCOPE_IDS.SITE_CLEARING,
      SCOPE_IDS.HAULING_AND_DISPOSAL,
      SCOPE_IDS.PILE_CUTTING,
      SCOPE_IDS.PILE_HACKING,
      SCOPE_IDS.EXCAVATION,
      SCOPE_IDS.TRIMMING_DEWATERING,
      SCOPE_IDS.SHEET_PILING,
      SCOPE_IDS.PILES,
      SCOPE_IDS.PILE_DRIVING,
    ],
    // scopeDescription: 'Driven Concrete Pile cutting up to Natural Ground Level, Supply and Pile Driving of 450x450 Concrete Piles',
    scopeDescription: `Pile Driving works for the Site Development and Iconic Link Bridge using 450mm x 450mm x 25m concrete piles.\n
      Total gross floor area of over 200,000 sqm on a piece of land of approx. 44,000 sqm.\n
      Shopping Mall, 1 massive mall, Hotel rooms more than 2,000 rooms, Grand Opera House, 1 Grand + 3 mini Theatres, Westside Avenue Restaurant & theatre district, Car Park spaces 2,300 spaces.\n
      Westside City Project is integrated with the shopping malls, theatres, restaurants, and shopping streets, etc, other Entertainment Facilities, 5-star Hotel rooms, More than 450 rooms, Car Park spaces approximately 1,000 spaces, Pool club & Night club.
    `,
    startDate: '',
    endDate: '',
    fileNames: [
      // 'SunCity-feature.jpg',
      'SunCity-5.JPG',
      'SunCity-6.JPG',
      'SunCity-1.JPG',
      'SunCity-2.JPG',
      'SunCity-3.JPG',
      'SunCity-4.JPG',
    ],
    services: [
      SERVICES_ID.GENERAL_EXCAVATION_AND_DEWATERING,
      SERVICES_ID.SHEET_PILING,
      SERVICES_ID.PILE_DRIVING,
    ],
    categories: [
      'Structural',
      'Building',
    ],
  },
  {
    id: 26,
    name: 'Sealbond Warehouse',
    client: 'Sealbond Chemical Industries Incorporation',
    city: 'Cavite',
    location: 'Silang, Cavite',
    scope: [
      SCOPE_IDS.DESIGN_AND_BUILD,
    ],
    fileNames: [
      'Sealbond-1.jpg',
      'Sealbond-2.jpg',
      'Sealbond-3.jpg',
      'Sealbond-4.jpg',
      'Sealbond-5.jpg',
      'Sealbond-6.jpg',
      'Sealbond-7.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.DESIGN_AND_BUILD,
    ],
    scopeDescription: `With a floor area of  1,590.72 sqm (48m x 33.14m).`,
  },
  {
    id: 25,
    name: 'IRM Ministries Ebenezer Christian Fellowship',
    client: 'IRM Ministries Ebenezer Christian Fellowship',
    city: 'Quezon City',
    location: 'Novaliches, Quezon City',
    scope: [
      SCOPE_IDS.GENERAL_CONSTRUCTION,
    ],
    fileNames: [
      'IRM-1.jpg',
      'IRM-2.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.GENERAL_CONSTRUCTION,
    ],
  },
  {
    id: 24,
    name: 'Central Link Project',
    client: 'First Orient Development and Construction Corp.',
    city: 'Parañaque City',
    location: 'Brgy. Tambo, Parañaque City',
    scope: [
      SCOPE_IDS.SHEET_PILING,
    ],
    fileNames: [
      'CentralLink-1.jpg',
      'CentralLink-2.jpg',
      'CentralLink-3.jpg',
      'CentralLink-4.jpg',
      'CentralLink-5.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.SHEET_PILING,
    ],
  },
  {
    id: 25,
    name: 'Philippines Economic Zone Authority Building (PEZA)',
    client: 'Rhodium 688 Builders Inc. (formerly Studio26 Construction Inc.)',
    city: 'Pasay City',
    location: 'Roxas Blvd., Pasay City',
    scope: [
      SCOPE_IDS.BORED_PILING,
    ],
    fileNames: [
      'Peza-1.jpg',
      'Peza-2.jpg',
      'Peza-3.jpg',
      'Peza-4.jpg',
      'Peza-5.jpg',
      'Peza-6.jpg',
      'Peza-7.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.BORED_PILING,
    ],
  },
  {
    id: 26,
    name: 'Pogo Island Cove',
    client: 'IPJR Construction',
    city: 'Cavite',
    location: 'Kawit, Cavite',
    scope: [
      SCOPE_IDS.PILE_DRIVING,
    ],
    fileNames: [
      'Pogo-1.jpg',
      'Pogo-2.jpg',
      'Pogo-3.jpg',
      'Pogo-4.jpg',
      'Pogo-5.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
  },
  // {
  //   id: 5,
  //   name: 'Sun City Phase B Package 2',
  //   client: 'Megawide Construction Corporation',
  //   clientImg: 'c-megawide.jpg',
  //   city: 'Parañaque City',
  //   location: 'Lot 5&6 Jose W. Diokno, Brgy. Tambo, Parañaque City',
  //   scope: [
  //     SCOPE_IDS.EXCAVATION,
  //     SCOPE_IDS.PILE_HACKING,
  //     SCOPE_IDS.HAULING_AND_DISPOSAL,
  //     SCOPE_IDS.TRIMMING_DEWATERING,
  //   ],
  //   startDate: '',
  //   endDate: '',
  //   fileNames: [
  //     'SunCity-4.JPG',
  //     'SunCity-1.JPG',
  //     'SunCity-2.JPG',
  //     'SunCity-3.JPG',
  //   ],
  //   services: [
  //     SERVICES_ID.STRUCTURAL,
  //   ],
  //   categories: [
  //     'Structural',
  //     'Building',
  //   ],
  // },
  {
    id: 1,
    name: 'Magsaysay Bridge',
    client: 'RRH Construction and Engineering Services',
    city: 'Olongapo City',
    location: 'Subic Bay, Olongapo City',
    scope: [
      SCOPE_IDS.LABOR,
      SCOPE_IDS.EQUIP_PILE_DRIVE,
    ],
    startDate: 'March 2023',
    endDate: 'May 2023',
    fileNames: [
      'MagsaysayBridge-3.JPG',
      'MagsaysayBridge-4.JPG',
      'MagsaysayBridge-2.JPG',
      'MagsaysayBridge-1.JPG',
      'MagsaysayBridge-5.JPG',
      'MagsaysayBridge-6.JPG',
      'MagsaysayBridge-7.JPG',
      'MagsaysayBridge-8.JPG',
      'MagsaysayBridge-9.JPG',
    ],
    services: [
      SERVICES_ID.BORED_PILING,
    ],
    categories: [
      'Bridge',
    ],
    status: 'On going',
    scopeDescription: `Consist of 24 bored pile positions with D1800mm x 40m depth and with full casing due to soil properties.`,
  },
  {
    id: 20,
    name: 'Abenson Warehouse',
    client: 'CSCEC Strait Construction & Development Co., LTD',
    location: 'Daang Hari Rd., M.Santos ext., Antipolo City',
    city: 'Antipolo City',
    scope: [
      SCOPE_IDS.PILE_DRIVING
    ],
    fileNames: [
      'Benson-2.JPG',
      'Benson-1.JPG',
      'Benson-3.jpg',
      'Benson-4.jpg',
      'Benson-5.jpg',
    ],
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
    // status: 'On going',
    scopeDescription: `A 6 storey building with foundation composed of 473 pile positions 450mm x 450mm using diesel hammer.`,
  },
  {
    id: 21,
    name: 'Lakeshore Medical Center',
    client: 'JNC Mayo7 Builders / R.P. Alejandro',
    location: 'Lakeshore, Mexico City, Pampanga',
    city: 'Mexico City',
    scope: [
      SCOPE_IDS.PILE_DRIVING
    ],
    fileNames: [
      'Lakeshore-3.jpg',
      'Lakeshore-1.jpg',
      'Lakeshore-2.jpg',
      'Lakeshore-4.jpg',
      'Lakeshore-5.jpg',
      'Lakeshore-6.jpg',
    ],
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
    // status: 'On going',
    scopeDescription: `An integrated modern medical and wellness facility surrounded by lush greenery and a relaxing 12-hectare lake that complements a posh residential development.\n
      Foundation is composed of 328 positions 400mm x 400mm x 24m concrete piles using diesel hammer.
    `,
  },
  {
    id: 22,
    name: 'Le Soleil De Dumaguete',
    client: 'Le Soleil De Dumaguete Inc.',
    location: 'Rizal Ave., cor Siliman Ave., Dumaguete',
    city: 'Dumaguete City',
    scope: [
      SCOPE_IDS.PILE_DRIVING
    ],
    fileNames: [
      'LeSoleil-3.jpg',
      'LeSoleil-1.jpg',
      'LeSoleil-2.jpg',
    ],
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
    status: 'On going',
    scopeDescription: `It is composed of 170 pile positions 400mm x 400mm x 12m concrete piles using diesel hammer.`,
  },
  {
    id: 31,
    name: 'Structural Retrofitting of 32 Storey Building',
    client: '-',
    city: '-',
    location: 'Metro Manila',
    scope: [
      SCOPE_IDS.STRUCTURAL_RETROFITTING,
    ],
    fileNames: [
      'Retro4-1.jpg',
      'Retro4-2.jpg',
      'Retro4-3.jpg',
      'Retro4-4.jpg',
      'Retro4-5.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.STRUCTURAL_RETROFITTING,
    ],
    scopeDescription: `It is a 32 storey building retrofitted using Steel Jacketing, Carbon Fiber and Carbon Plate.`,
  },
  {
    id: 30,
    name: 'Structural Retrofitting of 26 Storey Building',
    client: '-',
    city: '-',
    location: 'Metro Manila',
    scope: [
      SCOPE_IDS.STRUCTURAL_RETROFITTING,
    ],
    fileNames: [
      'Retro3-1.jpg',
      'Retro3-2.JPG',
      'Retro3-3.jpg',
      'Retro3-4.jpg',
      'Retro3-5.jpg',
      'Retro3-6.jpg',
      'Retro3-7.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.STRUCTURAL_RETROFITTING,
    ],
    scopeDescription: `It is a 26 storey building retrofitted using Steel Jacketing, Carbon Fiber and Carbon Plate.`,
  },
  {
    id: 29,
    name: 'Structural Retrofitting of 8 Buildings with 12 Storey each',
    client: '-',
    city: '-',
    location: 'Metro Manila',
    scope: [
      SCOPE_IDS.STRUCTURAL_RETROFITTING,
    ],
    fileNames: [
      'Retro2-1.jpg',
      'Retro2-2.jpg',
      'Retro2-3.jpg',
      'Retro2-4.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.STRUCTURAL_RETROFITTING,
    ],
    scopeDescription: `The buildings were retrofitted using Carbon plate and carbon fiber.`,
  },
  {
    id: 28,
    name: 'Structural Retrofitting of 4 Storey Building',
    client: '-',
    city: '-',
    location: 'Metro Manila',
    scope: [
      SCOPE_IDS.STRUCTURAL_RETROFITTING,
    ],
    fileNames: [
      'Retro1-1.jpg',
      'Retro1-2.jpg',
      'Retro1-3.jpg',
      'Retro1-4.jpg',
      'Retro1-5.jpg',
      'Retro1-6.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.STRUCTURAL_RETROFITTING,
    ],
    scopeDescription: `Retrofitting using Carbon Fiber, epoxy grouting and epoxy injection.`,
  },
  {
    id: 27,
    name: 'Structural Retrofitting of Bridges',
    client: '-',
    city: '-',
    location: 'Zamboanga, Cebu, Dumaguete, Quezon Province, Batangas, Iloilo',
    scope: [
      SCOPE_IDS.STRUCTURAL_RETROFITTING,
    ],
    fileNames: [
      'Bridge-1.jpg',
      'Bridge-2.jpg',
      'Bridge-3.jpg',
      'Bridge-4.jpg',
      'Bridge-5.jpg',
    ],
    status: 'Completed',
    services: [
      SERVICES_ID.STRUCTURAL_RETROFITTING,
    ],
    scopeDescription: `The bridges were retrofitted using Carbon plate and carbon fiber.`,
  },
  {
    id: 23,
    name: 'BCDA Connector Road',
    client: 'Rhodium 688 Builders Inc. (formerly Studio26 Construction Inc.)',
    location: 'New Clark City, Pampanga',
    city: 'New Clark City',
    scope: [
      SCOPE_IDS.SHEET_PILING
    ],
    fileNames: [
      'BCDA-1.jpg',
      'BCDA-2.jpg',
      'BCDA-3.jpg',
      'BCDA-4.jpg',
      'BCDA-5.jpg',
      'BCDA-6.jpg',
      'BCDA-7.jpg',
      'BCDA-8.jpg',
    ],
    services: [
      SERVICES_ID.SHEET_PILING,
    ],
    status: 'On going',
    scopeDescription: `Slope protection for a 2 kilometers river using Sheetpile type 2 - 5,194pcs x 15m length.`,
  },
  {
    id: 2,
    name: 'Proposed 3 Storey Commercial Building',
    client: 'Century Star Advance Construction',
    clientImg: 'c-csac.png',
    scope: [
      SCOPE_IDS.PILES,
      SCOPE_IDS.TESTING,
      SCOPE_IDS.LABOR,
      SCOPE_IDS.EQUIP_PILE_DRIVE,
    ],
    // scopeDescription: 'Supply and Pile Driving of 400x400 Concrete Piles',
    scopeDescription: 'Composed of 149 pile positions 400mm x 400mm x 18m (9m top pile and 9m bottom pile) using diesel hammer and pile epoxy.',
    startDate: 'March 2023',
    endDate: 'April 2023',
    fileNames: [
      '3Storey-4.jpg',
      '3Storey-2.JPG',
      '3Storey-1.JPG',
      '3Storey-5.jpg',
      '3Storey-6.jpg',
    ],
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
    categories: [
      'Building',
    ],
  },
  {
    id: 3,
    name: 'Navotas Fish Port Pier 2',
    client: 'FSO Industrial Facilities Construction',
    city: 'Navotas City',
    scope: [
      SCOPE_IDS.LABOR,
      SCOPE_IDS.EQUIP_PILE_DRIVE,
      SCOPE_IDS.EQUIP_DEMOLITION,
    ],
    startDate: 'December 2022',
    endDate: 'March 2023',
    fileNames: [
      'NavotasPort-1.JPG',
      'NavotasPort-2.JPG',
      'NavotasPort-3.JPG',
    ],
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
    categories: [
      'Pier',
      'Structural',
    ],
    scopeDescription: `Replacement of the existing pier. This includes demolition of slab, girders and beams.\n
      Pile Driving of 500 pile positions 500mm x 500mm x 22m prestressed concrete piles using diesel hammer.
    `,
  },
  {
    id: 6,
    name: '60MLD Aglipay Sewage Treatment Plant',
    client: 'Megawide Construction Corporation',
    clientImg: 'c-megawide.jpg',
    city: 'Mandaluyong City',
    location: 'Aglipay St. Brgy Poblacion, Mandaluyong City',
    scope: [
      SCOPE_IDS.SHEET_PILING,
      SCOPE_IDS.BORED_PILING,
      SCOPE_IDS.EQUIPMENT,
    ],
    startDate: 'July 2021',
    endDate: 'December 2022',
    fileNames: [
      'AglipaySewage-4.JPG',
      'AglipaySewage-1.JPG',
      'AglipaySewage-2.JPG',
      'AglipaySewage-3.JPG',
    ],
    services: [
      SERVICES_ID.BORED_PILING,
      SERVICES_ID.SHEET_PILING,
    ],
    categories: [
      'Industrial Plant'
    ],
    scopeDescription: `The Aglipay STP targets to serve a population of more than 650,000. This STP will be the first to be equipped with Moving Bed Biofilm Reactor (MBBR) process with Biological Nutrient Removal (BNR) technology, which will efficiently ensure water treatment and improve effluent water quality.`,
  },
  {
    id: 7,
    name: 'The Podium West Tower',
    client: 'Cornersteel Systems Corporation',
    clientImg: 'c-cornersteel.jpg',
    city: 'Pasig City',
    location: 'The Podium, Ortigas, Pasig City',
    scope: [
      SCOPE_IDS.CONCRETE_TOPPING,
    ],
    // scopeDescription: 'Lightweight Concrete Topping',
    scopeDescription: `Lightweight Concrete Topping from 8th Floor to 48th Floor.\n
      The Podium is located at mandaluyong city. We used lightweight concrete composed of Liquid converted into foam using foam generator and wiremesh.\n
      The Podium West Tower in Ortigas. This 48-storey building is PEZA-accredited and Pre-Certified LEED Gold. It has a typical floor plate of 2,523.74 sq m and offers floors with a semi warm shell handover condition. The office building is situated on top of a 5-storey mall, which hosts a variety of upscale retail stores and restaurants.
    `,
    startDate: 'January 2019',
    endDate: 'June 2019',
    fileNames: [
      'Podium-1b.jpg',
      'Podium-2.jpg',
      'Podium-3.jpg',
    ],
    services: [
      SERVICES_ID.LIGHTWEIGHT_CONCRETE_TOPPING,
    ],
    categories: [
      'Building'
    ],
  },
  {
    id: 9,
    name: 'ZMEG46 Megawide - Precast Taytay 1',
    client: 'Megawide Construction Corporation',
    clientImg: 'c-megawide.jpg',
    city: 'Taytay, Rizal',
    location: 'Megawide Formworks, 2758 Velasquez St., Taytay, Rizal',
    scope: [
      SCOPE_IDS.EQUIP_PILE_DRIVE,
      SCOPE_IDS.PILE_DRIVING,
      SCOPE_IDS.PILE_HACKING,
    ],
    startDate: 'October 2019',
    endDate: 'October 2019',
    fileNames: [
      'Zmeg-1.png',
      'Zmeg-2.jpg',
      'Zmeg-3.jpg',
      'Zmeg-4.jpg',
    ],
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
    categories: [
      'Structural',
    ],
    scopeDescription: `Megawide Construction Corporation new precast plant. Foundation is composed of 99 positions 400mm x 400mm x 24m double stick concrete piles using diesel hammer.`,
  },
  {
    id: 10,
    name: 'Access Road Leading to Declared Tourism Destination',
    client: 'Department of Public Works and Highways (Region VIII)',
    clientImg: 'c-dpwh.jpg',
    city: 'Biliran Province',
    location: 'Brgy. Sampao, Almeria, Biliria',
    scope: [
      SCOPE_IDS.CONCRETE_PAVING,
    ],
    startDate: '',
    endDate: '',
    fileNames: [
      'Sampao-2.JPG',
      'Sampao-1.JPG',
      'Sampao-3.JPG',
      'Sampao-4.JPG',
      'Sampao-5.JPG',
    ],
    services: [
      SERVICES_ID.ROADS_AND_SITE_DEVELOPMENT,
    ],
    categories: [
      'Road'
    ],
  },
  {
    id: 11,
    name: 'Bangon Backwater Dike',
    client: 'Department of Public Works and Highways (Region VIII)',
    clientImg: 'c-dpwh.jpg',
    city: 'Palo, Leyte',
    location: 'Palo, Leyte',
    scope: [
      SCOPE_IDS.CONCRETE_PAVING,
    ],
    startDate: '',
    endDate: '',
    fileNames: [
      'Bangon-1.JPG',
      'Bangon-2.JPG',
      'Bangon-3.JPG',
      'Bangon-4.JPG',
      'Bangon-5.JPG',
      'Bangon-6.JPG',
    ],
    services: [
      SERVICES_ID.ROADS_AND_SITE_DEVELOPMENT,
    ],
    categories: [
      'Road'
    ],
  },
  {
    id: 13,
    name: 'Structural Framing of Mezzanine',
    client: 'Diversified Technology Solutions Intl, Inc.',
    city: 'San Mateo, Rizal',
    location: '4F SM San Mateo, Rizal',
    scope: [
      SCOPE_IDS.SUPPLY_STEEL,
      SCOPE_IDS.INSTALLATION_STEEL,
    ],
    startDate: 'December 2018',
    endDate: 'January 2019',
    fileNames: [
      'SanMateo-1.JPG',
      'SanMateo-2.JPG',
      'SanMateo-3.JPG',
      'SanMateo-4.JPG',
      'SanMateo-5.JPG',
    ],
    services: [
      SERVICES_ID.STRUCTURAL_STEEL,
    ],
    categories: [
      'Structural',
    ],
  },
  {
    id: 14,
    name: 'Structural Retrofitting of 3-Storey School Building',
    client: '-',
    city: 'Albay',
    location: 'Albay',
    scope: [
      SCOPE_IDS.SUPPLY_STEEL,
      SCOPE_IDS.INSTALLATION_STEEL,
      SCOPE_IDS.SUPPLY_CARBON_FIBER,
      SCOPE_IDS.INSTALLATION_CARBON_FIBER,
      SCOPE_IDS.SUPPLY_CARBON_PLATE,
      SCOPE_IDS.INSTALLATION_CARBON_PLATE,
      SCOPE_IDS.RETROFITTING_FOUNDATION,
    ],
    startDate: 'March 2018',
    endDate: 'September 2018',
    fileNames: [
      'Bicol-1.jpg',
      'Bicol-2.jpg',
      'Bicol-3.jpg',
      'Bicol-4.jpg',
      'Bicol-5.jpg',
      'Bicol-6.jpg',
    ],
    services: [
      SERVICES_ID.STRUCTURAL_RETROFITTING,
    ],
    categories: [
      'Retrofit',
      'School',
      'Structural',
    ],
    scopeDescription: `Enhancement of Building foundation, retrofitting of beams and columns using carbon fiber. Restoration of walls.`,
  },
  {
    id: 15,
    name: 'Megawide Construction Corporation Precast Plant',
    client: 'Megawide Construction Corporation',
    clientImg: 'c-megawide.jpg',
    city: 'Taytay, Rizal',
    location: 'Megawide Construction Corporation, Taytay, Rizal',
    scope: [
      SCOPE_IDS.LABOR,
      SCOPE_IDS.EQUIP_PILE_DRIVE,
    ],
    startDate: 'July 2018',
    endDate: 'July 2018',
    fileNames: [
      'Megawide-1.JPG',
      'Megawide-2.JPG',
      'Megawide-3.JPG',
      'Megawide-4.JPG',
    ],
    services: [
      SERVICES_ID.PILE_DRIVING,
    ],
    categories: [
      'Structural',
    ],
    scopeDescription: 'Located inside Megawide Construction Corporation Precast Plant. Piles were driven for Tower Crane, Abutment, and Canteen using diesel hammer  ',
  },
  {
    id: 16,
    name: '3 Storey with Deck Townhomes',
    client: 'Building Green Development Corporation',
    city: 'Quezon City',
    location: '93 Matahimik St., Diliman, Quezon City',
    scope: [
      SCOPE_IDS.SNC_STRUCTURAL,
      SCOPE_IDS.SNC_ARCHITECTURAL,
      SCOPE_IDS.SNC_MERF,
    ],
    startDate: 'July 2017',
    endDate: 'March 2018',
    fileNames: [
      'Townhome-1.JPG',
    ],
    services: [
      SERVICES_ID.GENERAL_CONSTRUCTION,
    ],
    categories: [
      'Housing',
      'Residential',
      'Building',
    ],
    scopeDescription: `Composed of 5 townhomes.`,
  },
  {
    id: 17,
    name: 'Baras Agri Market and Development Center',
    client: 'Harvest Time Builders and Development Inc.',
    city: 'Baras, Rizal',
    location: 'KM 50 Manila East Road, Baras, Rizal',
    scope: [
      SCOPE_IDS.SNC_STRUCTURAL,
      SCOPE_IDS.SNC_ROOFING,
    ],
    startDate: 'January 2017',
    endDate: 'May 2018',
    fileNames: [
      'Baras-1.JPG',
      'Baras-2.JPG',
      'Baras-3.JPG',
      'Baras-4.JPG',
    ],
    services: [
      SERVICES_ID.DESIGN_AND_BUILD,
    ],
    categories: [
      'Building',
      'Roofing',
    ],
    scopeDescription: `Composed of 2 Buildings with a floor area of 1,000 sqm each building. Building A for Wet and Dry Market and Building B for Dry market.`,
  },
  {
    id: 18,
    name: 'Pasong Tamo Housing Project',
    client: 'Grace and Bautista Crame Construction Group Inc.',
    city: 'Quezon City',
    location: 'Pasong Tamo, Quezon City',
    scope: [
      SCOPE_IDS.LABOR,
      SCOPE_IDS.EQUIPMENT,
    ],
    startDate: 'March 2017',
    endDate: 'September 2017',
    fileNames: [
      'PasongTamo-1.JPG',
      'PasongTamo-2.JPG',
      'PasongTamo-3.JPG',
    ],
    services: [
      SERVICES_ID.ROADS_AND_SITE_DEVELOPMENT,
    ],
    categories: [
      'Housing',
      'Residential',
      'Building',
    ],
    scopeDescription: `This is a National Housing project.`,
  },
  {
    id: 19,
    name: 'Proposed 3 Storey Building with Deck',
    client: 'Moalboal Tropics',
    city: 'Moalboal, Cebu',
    location: 'Moalboal Tropics, Moalboal, Cebu',
    scope: [
      SCOPE_IDS.SNC_STRUCTURAL,
      SCOPE_IDS.SNC_ARCHITECTURAL,
      SCOPE_IDS.SNC_MERF,
    ],
    startDate: 'January 2017',
    endDate: 'December 2017',
    fileNames: [
      'Moalboal-1.jpg',
      'Moalboal-2.jpg',
      'Moalboal-3.jpg',
    ],
    services: [
      SERVICES_ID.DESIGN_AND_BUILD,
    ],
    categories: [
      'Building',
    ],
    scopeDescription: `It is a 3 star hotel located at Moalboal, Cebu with a 350 sqm per floor.`,
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<{ total: number, list: ProjectDetailsResponseData }>) {
  if (req.method === 'GET') {
    const details = projects.filter(e => e.id === parseInt(`${req.query.id}`))
    return res.status(200).json({
      total: 1,
      list: details
    })
  }

  const body = JSON.parse(req.body)

  const filteredProjects = projects.filter(e => {
    return (
      (e.name.toLowerCase().includes(body.search.toLowerCase()) ||
      e.client?.toLowerCase().includes(body.search.toLowerCase())) &&
      (body.category === 'all' || (e.categories && e.categories.length && e.categories.some((c) => c === body.category))) &&
      (body.service === 'all' || (e.services && e.services.some((c) => c.label === body.service)))
    )
  })

  return res.status(200).json({
    total: filteredProjects.length,
    list: filteredProjects.slice((body.page - 1) * body.size, body.size * body.page)
  })
}
