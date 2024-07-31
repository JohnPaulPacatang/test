import type { NextApiRequest, NextApiResponse } from 'next'

import { EventsResponseData } from '@/data/types'

const news: EventsResponseData = [
  {
    id: 99,
    title: 'MegaPartners Awards 2022',
    date: 'March 29, 2023',
    location: 'Megawide Head Office - 20 N.Domingo St., Brgy. Valencia, Quezon City',
    images: [
      { id: 1, src: 'Mega-1.jpg', description: '"For their contribution and enduring support as a MegaPartner for the year 2022 and for the stronger partnership towards a First-World Philippines."' },
      { id: 2, src: 'Mega-2.jpg', description: 'Edgar Saavedra (Megawide Chairman and CEO), Alan Russel Caracena (CEC President/CEO), Ruel Erese (CEC VP for Operations)' },
      { id: 4, src: 'Mega-4.jpg', description: 'With Megawide EPC COO Sir Frederick Tan and CRO Sir Martin Miguel Flores' },
      { id: 3, src: 'Mega-3.jpg', description: 'MegaPartners Awards 2022' },
    ],
    description: '"For their contribution and enduring support as a MegaPartner for the year 2022 and for the stronger partnership towards a First-World Philippines."',
  },
  {
    id: 100,
    title: "Regular Contractor's License Renewed until 2025",
    date: 'October 9, 2023',
    location: 'Makati City, Metro Manila',
    images: [
      // { id: 4, src: 'License-1.jpg', description: "Having complied with all the requirements for licensure pursuant to Republic Act No. 4566, CEC Construction Corporation's Regular Contractor License has been renewed until May 2025." },
      { id: 1, src: 'License-1.png', description: "Having complied with all the requirements for licensure pursuant to Republic Act No. 4566, CEC Construction Corporation's Regular Contractor License has been renewed until May 2025." },
    ],
    description: "Having complied with all the requirements for licensure pursuant to Republic Act No. 4566, CEC Construction Corporation's Regular Contractor License has been renewed until May 2025.",
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<EventsResponseData>) {
  res.status(200).json(news)
}
