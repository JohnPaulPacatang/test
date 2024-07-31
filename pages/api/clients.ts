import type { NextApiRequest, NextApiResponse } from 'next'

import { ClientResponseData } from '@/data/types'

export default function handler(req: NextApiRequest, res: NextApiResponse<ClientResponseData>) {
  const clients: ClientResponseData = [
    {
      id: 1,
      alt: 'Cornersteel Systems Corporation',
      img: '/static/images/clients/c-cornersteel.jpg',
      bgMode: 'cover',
    },
    {
      id: 2,
      alt: 'Megawide Construction Corporation',
      img: '/static/images/clients/c-megawide.jpg',
    },
    {
      id: 17,
      alt: 'D.M. Wenceslao and Associates, Inc.',
      img: '/static/images/clients/c-dmwai.jpg',
    },
    {
      id: 7,
      alt: 'DPWH',
      img: '/static/images/clients/c-dpwh.jpg',
    },
    {
      id: 3,
      alt: 'Toyota',
      img: '/static/images/clients/c-toyota.svg',
      bgMode: 'cover',
    },
    {
      id: 4,
      alt: 'Arollado and Partners Inc',
      img: '/static/images/clients/c-ap.jpg',
    },
    {
      id: 5,
      alt: 'CCT Constructors Corporation',
      img: '/static/images/clients/c-cct.png',
      bgMode: 'contain',
    },
    {
      id: 6,
      alt: 'DDT',
      img: '/static/images/clients/c-ddt.jpg',
    },
    {
      id: 8,
      alt: 'ECTA',
      img: '/static/images/clients/c-ecta.JPG',
    },
    {
      id: 9,
      alt: 'Emerson',
      img: '/static/images/clients/c-emerson.jpg',
    },
    {
      id: 10,
      alt: 'ES Calma Design and Associates',
      img: '/static/images/clients/c-escalma-logo.png',
    },
    {
      id: 11,
      alt: 'First Balfour',
      img: '/static/images/clients/c-first-balfour.png',
    },
    {
      id: 12,
      alt: 'Grundfos',
      img: '/static/images/clients/c-grundfos.png',
    },
    {
      id: 13,
      alt: 'MDC',
      img: '/static/images/clients/c-mdc.jpg',
    },
    {
      id: 14,
      alt: 'Mitsubishi',
      img: '/static/images/clients/c-mitsubishi.jpg',
    },
    {
      id: 16,
      alt: 'Taikisha',
      img: '/static/images/clients/c-taikisha.jpg',
    },
    {
      id: 15,
      alt: 'NG',
      img: '/static/images/clients/c-ng.jpg',
    },
    {
      id: 17,
      alt: 'Century Star Advance Construction',
      img: '/static/images/clients/c-csac.png',
    },
  ]

  res.status(200).json(clients)
}
