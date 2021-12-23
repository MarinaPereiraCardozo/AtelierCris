import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

const PORT = 7070

app.listen(PORT, () => console.log(`\nServer is Running on Port ${PORT}`))