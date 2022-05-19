import type { NextApiRequest, NextApiResponse } from 'next'
import { CatSensorProps } from '../../../pages/CatSensor'
import { prisma } from '../../../db'
import { PrismaClientValidationError } from '@prisma/client/runtime'

interface Error {
    message: string
    stacktrace?: string
}

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