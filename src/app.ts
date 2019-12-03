import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import dinoRouter from './routes/dinosaur.routes'

const app = express()
const PORT = 8090

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors({
  origin: 'http://localhost:3002',
  credentials: true
}))

app.use('/', dinoRouter)

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/jurassicworld')
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database`)
})

app.listen(PORT, (err: any) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port ' + PORT)
})