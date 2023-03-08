import express from 'express'

import { config } from 'dotenv'

const app = express()

app.get('/', (req, res) => {})

app.listen(3000, () => {})

config()

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${process.env.PORT} 🚀`)
})
