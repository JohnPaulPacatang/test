export interface NavItems {
  id: number
  label: string
  path: string
  children: {
    id: number
    label: string
    path: string
  }[]
}

export type ProjectResponseData = {
  id: number
  gridArea: string
  name: string
  src: string
  city?: string
}[]

type IdLabel = { id: number, label: string }
export type ProjectDetails = {
  id: number
  name: string
  client: string
  city?: string
  location?: string
  scope: IdLabel[]
  categories?: string[]
  startDate?: string
  endDate?: string
  fileNames?: string[]
  services: IdLabel[]
  clientImg?: string
  status?: string
  scopeDescription?: string
}
export type ProjectDetailsResponseData = ProjectDetails[]

export type AboutResponseData = {
  id: number
  title: string
  description: string
  icon: 'quality' | 'collaboration' | 'save' | 'improvement' | 'dependency' | 'performance'
}[]

export type ClientResponseData = {
  id: number
  alt: string
  img: string
  bgMode?: string
}[]

export type EventImageDetails = {
  id: number
  src: string
  description?: string
}
export type EventDetails = {
  id: number
  title: string
  images: EventImageDetails[]
  date: string
  location: string
  description: string
}
export type EventsResponseData = EventDetails[]

export type EquipmentDetails = {
  id: number
  name: string
  units: number
  unitLabel?: string
  capacity?: string
  category: string
  fileName?: string
}
export type EquipmentsResponseData = EquipmentDetails[]
