import express from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from './swagger.json'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

const PORT = 7070

app.listen(PORT, () => console.log(`\nServer is Running on Port ${PORT}`))