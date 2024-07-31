import type { NextApiRequest, NextApiResponse } from 'next'

import { AboutResponseData } from '@/data/types'

export const aboutUs: AboutResponseData = [
  {
    id: 1,
    title: 'Quality Services',
    description: 'We pride ourselves in giving our clients quality services, on-time completion of projects and responsive after sales services.',
    icon: 'quality',
  },
  {
    id: 2,
    title: 'We are Passionate',
    description: 'We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support they need.',
    icon: 'collaboration',
  },
  {
    id: 3,
    title: 'We are Efficient',
    description: 'We aim to eliminate the task of dividing your project between different architecture and construction company by offering design and build services for you.',
    icon: 'save',
  },
  {
    id: 4,
    title: 'Highly Trained Professionals',
    description: 'Our able managers, engineers, and applicators have gone through extensinve training and hands-on experience to ensure the quality of performance on the job.',
    icon: 'improvement',
  },
  {
    id: 5,
    title: 'Honest and Dependable',
    description: 'We strive to complete our projects with integrity, not just with our clients, but also our suppliers and contractors.',
    icon: 'dependency',
  },
  {
    id: 6,
    title: 'Continuous Improvement',
    description: 'We commit ourselves to continually improve our processes by using the best of technologies and tools to ensure that all jobs are done efficiently and correctly.',
    icon: 'performance',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<AboutResponseData>) {
  res.status(200).json(aboutUs)
}
