import express from 'express'
import { routes } from './routes'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
    origin: process!.env!.ORIGIN! || 'http://localhost:3000'
}))
app.use(routes)

app.listen(3333,()=>{
    console.log('HTTP server running')
})