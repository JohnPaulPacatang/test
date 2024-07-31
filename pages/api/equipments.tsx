import type { NextApiRequest, NextApiResponse } from 'next'

import { EquipmentsResponseData } from '@/data/types'
import { EQUIPMENT_CATEGORIES } from '@/data/constants'

const CATEGORIES = EQUIPMENT_CATEGORIES

const equipments: EquipmentsResponseData = [
  {
    id: 1,
    name: 'SOILMEC SR625 Drilling Rig',
    units: 1,
    category: CATEGORIES.BORED_PILING_UNIT,
    fileName: 'soilmec-sr625.png',
  },
  {
    id: 2,
    name: 'XCMG CQUY150 Crawler Crane',
    units: 1,
    capacity: '50 tons',
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'xcmg-crawler-crane.png',
  },
  {
    id: 3,
    name: 'HITACHI KH180-3 Crawler Crane',
    units: 1,
    capacity: '50 tons',
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'hitachi-kh180-3.png',
  },
  {
    id: 4,
    name: 'KOBELCO 7035 Crawler Crane',
    units: 1,
    capacity: '35 tons',
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'kobelco-7035.png',
  },
  {
    id: 5,
    name: 'KOBELCO 7045 Crawler Crane',
    units: 1,
    capacity: '45 tons',
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'kobelco-7045.png',
  },
  {
    id: 6,
    name: 'KOBELCO 7080 Crawler Crane',
    units: 1,
    capacity: '80 tons',
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'kobelco-7080.png',
  },
  {
    id: 7,
    name: 'HITACHI KH125 Crawler Crane',
    units: 1,
    capacity: '35 tons',
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'hitachi-kh125.png',
  },
  {
    id: 8,
    name: 'HITACHI OH-500 Crawler Rig with Lead',
    units: 1,
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'hitachi-oh-500.jpg',
  },
  {
    id: 55,
    name: 'HITACHI PD100 Crawler Crane',
    units: 1,
    capacity: '50 tons',
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'hitachi-pd100.jpg',
  },
  {
    id: 56,
    name: 'IHI CCH500 Crawler Crane',
    units: 1,
    capacity: '50 tons',
    category: CATEGORIES.CRAWLER_CRANE,
    fileName: 'ihi-cch500.png',
  },
  {
    id: 52,
    name: 'Derrick Crane (2 tons)',
    units: 1,
    capacity: '2 tons',
    category: CATEGORIES.OTHERS,
    fileName: 'derrick-crane.png',
  },
  {
    id: 9,
    name: 'KOMATSU LW250-3 Rough Terrain',
    units: 1,
    capacity: '25 tons',
    category: CATEGORIES.ROUGH_TERRAIN,
    fileName: 'komatsu-lw250-3.jpg',
  },
  {
    id: 10,
    name: 'ACE 3.5 tons Diesel Hammer',
    units: 2,
    capacity: '3.5 tons',
    category: CATEGORIES.DIESEL_HAMMER,
    fileName: 'ace-3.5.png',
  },
  {
    id: 51,
    name: 'DD 3.5 tons Diesel Hammer',
    units: 2,
    capacity: '3.5 tons',
    category: CATEGORIES.DIESEL_HAMMER,
    fileName: 'dd-35.png',
  },
  {
    id: 11,
    name: '30m Piling Lead - Circular Lead',
    units: 1,
    unitLabel: 'set',
    category: CATEGORIES.PILE_DRIVING,
    fileName: '30m-piling-lead.png',
  },
  {
    id: 48,
    name: '30m Fabricated Lead - 4" Form into Square Lattice Lead',
    units: 1,
    unitLabel: 'set',
    category: CATEGORIES.PILE_DRIVING,
    fileName: '30m-fabricated-lead.png',
  },
  {
    id: 49,
    name: '30m Piling Lead - Circular Lead for OH-500',
    units: 1,
    unitLabel: 'set',
    category: CATEGORIES.PILE_DRIVING,
    fileName: '30m-piling-lead-2.jpg',
  },
  {
    id: 12,
    name: 'LONKING CDM 6225 Backhoe',
    units: 1,
    capacity: '20 tons, 3/4 Bucket Capacity',
    category: CATEGORIES.BACK_HOE,
    fileName: 'lonking-cdm-6225.png',
  },
  {
    id: 13,
    name: 'KOMATSU HB205 Backhoe',
    units: 1,
    capacity: '20 tons, 3/4 Bucket Capacity',
    category: CATEGORIES.BACK_HOE,
    fileName: 'komatsu-hb205-2.png',
  },
  {
    id: 14,
    name: 'XCMG 215 Backhoe',
    units: 1,
    capacity: '20 tons, 3/4 Bucket Capacity',
    category: CATEGORIES.BACK_HOE,
    fileName: 'xcmg-215.png',
  },
  {
    id: 15,
    name: 'SANY 215C Backhoe',
    units: 1,
    capacity: '20 tons, 3/4 Bucket Capacity',
    category: CATEGORIES.BACK_HOE,
    fileName: 'sany-215c.png',
  },
  {
    id: 16,
    name: 'HITACHI ZX 130 Backhoe',
    units: 1,
    capacity: '13 tons, 1/2 Bucket Capacity',
    category: CATEGORIES.BACK_HOE,
    fileName: 'hitachi-zx130.png',
  },
  {
    id: 58,
    name: 'KOBELCO SK200-6 Backhoe',
    units: 1,
    capacity: '20 tons, 3/4 Bucket Capacity',
    category: CATEGORIES.BACK_HOE,
    fileName: 'kobelco-sk200-6.png',
  },
  {
    id: 17,
    name: 'CATERPILLAR 320D Hydraulic Excavator',
    units: 1,
    capacity: 'Bucket Capacity: 1.2m<sup>3</sup>',
    category: CATEGORIES.EXCAVATORS,
    fileName: 'caterpillar-320d.png',
  },
  {
    id: 17,
    name: 'CATERPILLAR 312D Excavator',
    units: 1,
    capacity: '20 tons, 3/4 Bucket Capacity',
    category: CATEGORIES.EXCAVATORS,
    fileName: 'caterpillar-312d.png',
  },
  {
    id: 59,
    name: 'KOMATSU PC210-6 Hydraulic Excavator',
    units: 1,
    capacity: 'Bucket Capacity: 1.2m<sup>3</sup>',
    category: CATEGORIES.EXCAVATORS,
    fileName: 'komatsu-pc210-6.png',
  },
  {
    id: 60,
    name: 'KOMATSU PC200-8N1 Hydraulic Excavator',
    units: 1,
    capacity: 'Bucket Capacity: 1.1m<sup>3</sup>',
    category: CATEGORIES.EXCAVATORS,
    fileName: 'komatsu-pc200-8n1.png',
  },
  {
    id: 18,
    name: 'KOMATSU WA380-3A Loader',
    units: 1,
    capacity: 'Bucket Capacity: 3.5 cu.m',
    category: CATEGORIES.LOADER,
    fileName: 'komatsu-wa380-3a.png',
  },
  {
    id: 19,
    name: 'SL-40 Hydraulic Vibratory Hammer',
    units: 1,
    capacity: '6.5 tons',
    category: CATEGORIES.VIBRATORY_HAMMER,
    fileName: 'sl40-vibro-hammer.png',
  },
  {
    id: 20,
    name: 'W350 BULLSTERN Vibratory Hammer',
    units: 1,
    capacity: '3.5 tons',
    category: CATEGORIES.VIBRATORY_HAMMER,
    fileName: 'w350-bullstern-vibro.png',
  },
  {
    id: 21,
    name: 'SR-45 Hydraulic Vibratory Hammer ',
    units: 1,
    capacity: '6.5 tons',
    category: CATEGORIES.VIBRATORY_HAMMER,
    fileName: 'sr45-vibro-hammer.png',
  },
  {
    id: 23,
    name: 'STARKE Vibratory Hammer Backhoe Mounted',
    units: 1,
    category: CATEGORIES.VIBRATORY_HAMMER
  },
  {
    id: 24,
    name: 'SUNJIN Side Grip Vibro Hammer',
    units: 1,
    capacity: '6m to 7m Sheet Piles',
    category: CATEGORIES.VIBRATORY_HAMMER,
    fileName: 'sunjin-vibro-hammer.png',
  },
  {
    id: 25,
    name: 'Lowbed with Trailer Truck',
    units: 1,
    category: CATEGORIES.WHEELERS
  },
  {
    id: 26,
    name: '2018 FOTON TORNADO 4.5C Dropside 3.8L MT',
    units: 1,
    category: CATEGORIES.WHEELERS
  },
  {
    id: 27,
    name: '2018 FOTON TORNADO 3.5C Mini Dump Truck 3.8L MT',
    units: 1,
    category: CATEGORIES.WHEELERS,
    fileName: 'foton-mini-dump-truck.png',
  },
  {
    id: 28,
    name: 'FOTON BOOMTRUCK',
    units: 1,
    capacity: '1.5 tons',
    category: CATEGORIES.WHEELERS,
    fileName: 'foton-boom-truck.png',
  },
  {
    id: 29,
    name: 'HOWO A7 10W Dump Truck',
    units: 1,
    category: CATEGORIES.WHEELERS,
    fileName: 'howo-dumptruck.png',
  },
  {
    id: 50,
    name: 'HOWO Tractor Head',
    units: 1,
    capacity: '40 tons',
    category: CATEGORIES.WHEELERS,
    fileName: 'howo-tractor-head.png',
  },
  {
    id: 30,
    name: 'GENLYON Dump Truck',
    units: 1,
    category: CATEGORIES.WHEELERS,
    fileName: 'genlyon-dumptruck.png',
  },
  {
    id: 31,
    name: 'DENYO Genset - 275 kVA',
    units: 1,
    capacity: '275 kVA',
    category: CATEGORIES.GENERATOR_SET,
    fileName: 'denyo-genset.png',
  },
  {
    id: 32,
    name: 'F.G. Wilson Genset - 225 kVA',
    units: 1,
    capacity: '225 kVA',
    category: CATEGORIES.GENERATOR_SET,
    fileName: 'f.g-wilson-genset.png',
  },
  {
    id: 53,
    name: 'Foam Generator',
    units: 1,
    category: CATEGORIES.OTHERS,
    fileName: 'foam-generator.png',
  },
  {
    id: 54,
    name: 'EDT500 Concrete Breaker - for 3/4 Backhoe',
    units: 1,
    category: CATEGORIES.OTHERS,
    fileName: 'edt500.png',
  },
  {
    id: 57,
    name: 'JSB 1600 Concrete Breaker - for 3/4 Backhoe',
    units: 1,
    category: CATEGORIES.OTHERS,
    fileName: 'jsb-1600.jpg',
  },
  // {
  //   id: 33,
  //   name: 'DENYO 10 kVA',
  //   units: 1,
  //   capacity: '10 kVA',
  //   category: CATEGORIES.GENERATOR_SET
  // },
  // {
  //   id: 34,
  //   name: '2017 FORD RANGER',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 35,
  //   name: '2017 FORD ECOSPORT',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 36,
  //   name: 'ISUZU MUX',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 37,
  //   name: 'NISSAN JUKE',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 38,
  //   name: '2011 MITSUBISHI STRADA',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 39,
  //   name: '2005 HONDA CITY',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 40,
  //   name: 'MITSUBISHI L300',
  //   units: 3,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 41,
  //   name: 'FORD FOCUS',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 42,
  //   name: 'ISUZU D-MAX',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 43,
  //   name: 'MITSUBISHI LANCER EX GTA',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 44,
  //   name: 'MITSUBISHI BOOM TRUCK',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 45,
  //   name: 'MITSUBISHI CANTER TRUCK',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 46,
  //   name: '2017 FORD MUSTANG',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
  // {
  //   id: 47,
  //   name: 'BMW 3201',
  //   units: 1,
  //   category: CATEGORIES.VEHICLES
  // },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<{ total: number, list: EquipmentsResponseData }>) {
  const body = JSON.parse(req.body)

  const filteredEquipments = equipments.filter(e => {
    return (
      e.name.toLowerCase().includes(body.search.toLowerCase()) ||
      e.capacity?.toLowerCase().includes(body.search.toLowerCase())) &&
      (e.category === body.category || body.category === 'all')
  })

  return res.status(200).json({
    total: filteredEquipments.length,
    list: filteredEquipments.slice((body.page - 1) * body.size, body.size * body.page)
  })
}
