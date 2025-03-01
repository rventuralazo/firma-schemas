import express from 'express'
import dotenv from 'dotenv'
import receptorRouter from './routes/receptor.router'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  return res.send('Hello World!')
})
app.use(receptorRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})