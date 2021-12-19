import express from 'express'

const app = express()

const PORT = 7070

app.listen(PORT, () => console.log(`\nServer Running on Port ${PORT}`))