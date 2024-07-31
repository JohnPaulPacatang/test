import type { NextApiRequest, NextApiResponse } from 'next'

import { EventsResponseData } from '@/data/types'

const events: EventsResponseData = [
  {
    id: 1,
    title: 'CEC goes to Singapore and Malaysia!',
    images: [
      { id: 11, src: 'Sing-1.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 12, src: 'Sing-2.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 13, src: 'Sing-3.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 14, src: 'Sing-4.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 15, src: 'Sing-5.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 16, src: 'Sing-6.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 17, src: 'Sing-7.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 18, src: 'Sing-8.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 19, src: 'Sing-9.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 110, src: 'Sing-10.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 111, src: 'Sing-11.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 112, src: 'Sing-12.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
      { id: 113, src: 'Sing-13.jpg', description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.' },
    ],
    location: 'Singapore - Malaysia',
    date: 'August 31 - October 4, 2018',
    description: 'CEC Construction Corporation Company Outing to Singapore and Malaysia.',
  },
  {
    id: 2,
    title: 'CEC Company Outing',
    images: [
      { id: 21, src: 'Zambales-1.jpg', description: 'CEC Construction Corporation Company Outing to Potipot Gateway Resort - Candelaria, Zambales.' },
      { id: 22, src: 'HeadOffice.jpg', description: 'Head Office' },
      { id: 23, src: 'Black.jpg', description: '6th Place: Team Black' },
      { id: 24, src: 'Orange.jpg', description: '5th Place: Team Orange' },
      { id: 25, src: 'Green.jpg', description: '4th Place: Team Green' },
      { id: 26, src: 'Red.jpg', description: '3rd Place: Team Red' },
      { id: 27, src: 'Blue.jpg', description: '2nd Place: Team Blue' },
      { id: 28, src: 'Yellow.jpg', description: '1st Place: Team Yellow' },
      { id: 41, src: 'Fellow-1.jpg', description: 'Fellowship Night' },
      { id: 42, src: 'Fellow-2.jpg', description: 'Fellowship Night' },
      { id: 43, src: 'Fellow-3.jpg', description: 'Fellowship Night' },
      { id: 44, src: 'Fellow-4.jpg', description: 'Fellowship Night' },
      { id: 45, src: 'Fellow-5.jpg', description: 'Fellowship Night' },
    ],
    location: 'Candelaria, Zambales',
    date: 'June 29 - 30, 2023',
    description: 'CEC Construction Corporation Company Outing to Potipot Gateway Resort - Candelaria, Zambales.',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<EventsResponseData>) {
  res.status(200).json(events)
}
