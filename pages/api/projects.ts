import type { NextApiRequest, NextApiResponse } from 'next'

import { ProjectResponseData } from '../../data/types'

export default function handler(req: NextApiRequest, res: NextApiResponse<ProjectResponseData>) {
  if (req.query.highlight) {
    const projects = [
      { id: 12, gridArea: 'A', name: 'Parqal', src: 'Parqal-feature2.jpg', city: 'Parañaque City' },
      { id: 8, gridArea: 'B', name: 'Midpark', src: 'Midpark-feature.jpg', city: 'Parañaque City' },
      { id: 4, gridArea: 'C', name: 'Sun City', src: 'SunCity-feature.jpg', city: 'Parañaque City' },
      // { id: 2, gridArea: 'D', name: 'Proposed 3 Storey Commercial Building', src: '3Storey-2.JPG' },
      // { id: 1, gridArea: 'E', name: 'Magsaysay Bridge', src: 'MagsaysayBridge-2.JPG' },
      // { id: 3, gridArea: 'F', name: 'Navotas Fish Port Pier', src: 'NavotasPort-1.JPG' },
    ]

    return res.status(200).json(projects)
  }

  const projects = [
    { id: 12, gridArea: 'A', name: 'Parqal', src: 'Parqal-feature2.jpg' },
    { id: 8, gridArea: 'B', name: 'Midpark', src: 'Midpark-feature.jpg' },
    { id: 4, gridArea: 'C', name: 'Sun City', src: 'SunCity-feature.jpg' },
    // { id: 2, gridArea: 'D', name: 'Proposed 3 Storey Commercial Building', src: '3Storey-2.JPG' },
    // { id: 1, gridArea: 'E', name: 'Magsaysay Bridge', src: 'MagsaysayBridge-2.JPG' },
    // { id: 3, gridArea: 'F', name: 'Navotas Fish Port Pier', src: 'NavotasPort-1.JPG' },
  ]

  res.status(200).json(projects)
}
