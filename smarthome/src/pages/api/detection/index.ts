import type { NextApiRequest, NextApiResponse } from 'next'
import { CatDetectionProps } from '../../../components/CatDetection'
import { prisma } from '../../../../lib/prisma'
import { PrismaClientValidationError } from '@prisma/client/runtime'

interface Error {
    message: string
    stacktrace?: string
}
// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string | Error>
  ) {
    try {
      switch (req.method) {
        case 'GET':
          return handleGet(req, res)
        case 'POST':
          return handlePost(req, res)
        default:
          return res.status(405).json({ message: `Request method '${req.method}' not supported` })
      }
    }
    catch (err: any) {
      const stacktrace = process.env.NODE_ENV == "development" ? err.message : undefined
      if (err instanceof PrismaClientValidationError)
        return res.status(400).json({ message: 'Bad request', stacktrace })
      else
        return res.status(500).json({ message: 'Internal server error', stacktrace })
    }
  }

  async function handleGet(
    req: NextApiRequest,
    res: NextApiResponse<string | Error>
  ) {
    const detections = await prisma.detection.findMany({
      select: {
        id: true,
        objects: true,
        detectedAt: true,
        image: false
      }
    })
    return res.status(200).json(JSON.stringify(detections))
  }

  async function handlePost(
    req: NextApiRequest,
    res: NextApiResponse<string | Error>
  ) {
    if (req.headers['authorization'] !== process.env.SECRET_KEY)
      return res.status(401).json({ message: 'Invalid authorization token' })
  
    if (req.headers['content-type'] !== 'application/json')
      return res.status(415).json({ message: `Content-type '${req.headers['content-type']}' not supported` })
  
    const body: CatDetectionProps = req.body
  
    const detection = await prisma.detection.create({
      data: {
        objects: {
          createMany: {
            data: body.objects
          }
        },
        detectedAt: body.detectedAt,
        image: body.image
      }
    })
  
    return res.status(201).json(JSON.stringify(detection))
  }