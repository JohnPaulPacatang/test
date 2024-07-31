import SvgQuality from '@/components/common/SvgComponent/SvgQuality'
import SvgCollaboration from '@/components/common/SvgComponent/SvgCollaboration'
import SvgPerformance from '@/components/common/SvgComponent/SvgPerformance'
import SvgSave from '@/components/common/SvgComponent/SvgSave'
import SvgDependency from '@/components/common/SvgComponent/SvgDependency'
import SvgImprovement from '@/components/common/SvgComponent/SvgImprovement'

export const aboutUsIcons = {
  quality: <SvgQuality size={48} />,
  collaboration: <SvgCollaboration size={48} />,
  save: <SvgSave size={48} />,
  improvement: <SvgImprovement size={48} />,
  dependency: <SvgDependency size={48} />,
  performance: <SvgPerformance size={48} />,
}

export const EQUIPMENT_CATEGORIES = {
  BORED_PILING_UNIT: 'Drilling Machine',
  CRAWLER_CRANE: 'Crawler Crane',
  ROUGH_TERRAIN: 'Rough Terrain',
  PILE_DRIVING: 'Pile Driving Equipment',
  BACK_HOE: 'Backhoe',
  EXCAVATORS: 'Excavator',
  LOADER: 'Loader',
  VIBRATORY_HAMMER: 'Vibratory Hammer',
  WHEELERS: 'Wheeler',
  GENERATOR_SET: 'Generator Set',
  VEHICLES: 'Vehicle',
  DIESEL_HAMMER: 'Diesel Hammer',
  OTHERS: 'Others',
}

export const EQUIPMENT_CATEGORIES_SELECT = [
  { id: 1, value: 'BORED_PILING_UNIT', label: 'Drilling Machine' },
  { id: 2, value: 'CRAWLER_CRANE', label: 'Crawler Crane' },
  { id: 2, value: 'ROUGH_TERRAIN', label: 'Rough Terrain' },
  { id: 4, value: 'EXCAVATORS', label: 'Excavator' },
  { id: 4, value: 'BACK_HOE', label: 'Backhoe' },
  { id: 5, value: 'LOADER', label: 'Loader' },
  { id: 6, value: 'VIBRATORY_HAMMER', label: 'Vibratory Hammer' },
  { id: 7, value: 'WHEELERS', label: 'Wheeler' },
  { id: 10, value: 'DIESEL_HAMMER', label: 'Diesel Hammer' },
  { id: 3, value: 'PILE_DRIVING', label: 'Pile Driving Equipment' },
  { id: 8, value: 'GENERATOR_SET', label: 'Generator Set' },
  { id: 11, value: 'OTHERS', label: 'Others' },
  // { id: 9, value: 'VEHICLES', label: 'Vehicle' },
]

export const CATEGORIES_SELECT = [
  { id: 1, value: 'Building', label: 'Buildings' },
  { id: 2, value: 'Road', label: 'Roads and Bridges' },
  { id: 3, value: 'Industrial Plant', label: 'Warehouses and Industrial Plants' },
  { id: 4, value: 'Structural', label: 'Structural Engineering' },
]

// OLD SERVICES
// export const SERVICES_ID_SELECT = [
//   { id: 5, value: 'Structural', label: 'Structural' },
//   { id: 1, value: 'Construction', label: 'Construction' },
//   { id: 2, value: 'Design', label: 'Design' },
//   { id: 3, value: 'Retrofit', label: 'Retrofit' },
//   { id: 4, value: 'Erection', label: 'Erection' },
//   // { id: 5, value: 'Road', label: 'Road' },
// ]
// export const SERVICES_ID = {
//   STRUCTURAL: { id: 5, label: 'Structural' },
//   CONSTRUCTION: { id: 1, label: 'Construction' },
//   DESIGN: { id: 2, label: 'Design' },
//   RETROFIT: { id: 3, label: 'Retrofit' },
//   ERECTION: { id: 4, label: 'Erection' },
//   // ROAD: { id: 5, label: 'Road' },
// }
export const SERVICES_ID_SELECT = [
  { id: 1, value: 'Structural Retrofitting', label: 'Structural Retrofitting' },
  { id: 2, value: 'Pile Driving', label: 'Pile Driving' },
  { id: 3, value: 'Sheet Piling', label: 'Sheet Piling' },
  { id: 4, value: 'Roads and Site Development', label: 'Roads and Site Development' },
  { id: 5, value: 'Bored Piling', label: 'Bored Piling' },
  { id: 6, value: 'General Excavation and Dewatering', label: 'General Excavation and Dewatering' },
  { id: 7, value: 'Design and Build', label: 'Design and Build' },
  { id: 8, value: 'General Construction', label: 'General Construction' },
  { id: 9, value: 'Lightweight Concrete Topping', label: 'Lightweight Concrete Topping' },
  { id: 10, value: 'Structural Steel', label: 'Structural Steel' },
]
export const SERVICES_ID = {
  STRUCTURAL_RETROFITTING: { id: 1, label: 'Structural Retrofitting' },
  PILE_DRIVING: { id: 2, label: 'Pile Driving' },
  SHEET_PILING: { id: 3, label: 'Sheet Piling' },
  ROADS_AND_SITE_DEVELOPMENT: { id: 4, label: 'Roads and Site Development' },
  BORED_PILING: { id: 5, label: 'Bored Piling' },
  GENERAL_EXCAVATION_AND_DEWATERING: { id: 6, label: 'General Excavation and Dewatering' },
  DESIGN_AND_BUILD: { id: 7, label: 'Design and Build' },
  GENERAL_CONSTRUCTION: { id: 8, label: 'General Construction' },
  LIGHTWEIGHT_CONCRETE_TOPPING: { id: 9, label: 'Lightweight Concrete Topping' },
  STRUCTURAL_STEEL: { id: 10, label: 'Structural Steel' },
}

export const SCOPE_IDS = {
  LABOR: { id: 1, label: 'Supply of Labor' },
  PILES: { id: 2, label: 'Supply of Piles' },
  TESTING: { id: 3, label: 'Testing' },
  EQUIP_PILE_DRIVE: { id: 4, label: 'Equipment for Pile Driving' },
  EQUIP_DEMOLITION: { id: 5, label: 'Equipment for Demolition' },
  SITE_CLEARING: { id: 6, label: 'Site Clearing and Grubbing' },
  PILE_CUTTING: { id: 7, label: 'Pile Cutting' },
  PILE_HACKING: { id: 10, label: 'Pile Hacking' },
  PILE_DRIVING: { id: 15, label: 'Pile Driving' },
  HAULING_AND_DISPOSAL: { id: 8, label: 'Hauling and Disposal of Debris' },
  EXCAVATION: { id: 9, label: 'Excavation' },
  DEWATERING: { id: 27, label: 'Dewatering Works' },
  TRIMMING_DEWATERING: { id: 11, label: 'Trimming and Dewatering' },
  SHEET_PILING: { id: 12, label: 'Sheet Piling' },
  BORED_PILING: { id: 13, label: 'Bored Piling' },
  CIVIL: { id: 14, label: 'Civil Work' },
  CONCRETE_PAVING: { id: 15, label: 'Concrete Paving' },
  CONCRETE_TOPPING: { id: 15, label: 'Concrete Topping' },
  SUPPLY_STEEL: { id: 16, label: 'Supply of Structural Steel' },
  INSTALLATION_STEEL: { id: 17, label: 'Installation of Structural Steel' },
  SUPPLY_CARBON_FIBER: { id: 18, label: 'Supply of Carbon Fiber' },
  INSTALLATION_CARBON_FIBER: { id: 19, label: 'Installation of Carbon Fiber' },
  SUPPLY_CARBON_PLATE: { id: 20, label: 'Supply of Carbon Plate' },
  INSTALLATION_CARBON_PLATE: { id: 21, label: 'Installation of Carbon Plate' },
  RETROFITTING_FOUNDATION: { id: 22, label: 'Retrofitting of Foundation' },
  SNC_STRUCTURAL: { id: 23, label: 'Supply and Construction of Structural Works' },
  SNC_ARCHITECTURAL: { id: 24, label: 'Supply and Construction of Architectural Works' },
  SNC_MERF: { id: 25, label: 'Supply and Construction of MERF Works' },
  SNC_ROOFING: { id: 26, label: 'Supply and Construction of Roofing Works' },
  EQUIPMENT: { id: 27, label: 'Supply of Equipment' },
  GENERAL_CONSTRUCTION: { id: 28, label: 'General Construction' },
  DESIGN_AND_BUILD: { id: 29, label: 'Design and Build' },
  STRUCTURAL_RETROFITTING: { id: 30, label: 'Structural Retrofitting' },
  BACKFILING: { id: 31, label: 'Backfiling Works' },
  GRAVEL_BEDDING: { id: 32, label: 'Gravel Bedding' },
}
