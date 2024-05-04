import type { Request, Response } from 'express'
import express from 'express'
import bodyParser from 'body-parser'
import { ServiceSchema, type DataResponse, type Service } from '../types'
import response from './data'
import cors from 'cors'
import dotenv from 'dotenv'
import { z } from 'zod'

const app = express()
dotenv.config()

const corsOptions: cors.CorsOptions = {
  origin: process.env.VITE_APP_FRONT_URL,
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Data route
app.route('/api/:entity').get((req: Request, res: Response) => {
  try {
    const { entity } = req.params
    const data: DataResponse = response
    const entityData: Service[] | undefined = data[entity]

    if (!entityData) {
      return res.status(404).send('Not found')
    }

    const query: string = String(req.query.q || '').trim().toLowerCase()

    const filteredData: Service[] = entityData.filter((service: Service) => {
      for (const key in service) {
        if (service[key] && typeof service[key] === 'string' &&
          String(service[key]).toLowerCase().includes(query)
        ) {
          return true
        }
      }
      return false
    })
    const validationResult = z.array(ServiceSchema).safeParse(filteredData)
    if (!validationResult.success) {
      return res.status(500).send('Internal Server Error')
    }

    return res.status(200).send(validationResult.data)
  } catch (err) {
    console.error(err)
    return res.status(500).send('Internal Server Error')
  }
})

// Catch-all for 404 responses
app.use((req: Request, res: Response) => {
  res.status(404).send('Not found')
})

export default app
