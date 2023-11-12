import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import dalleRoutes from './routes/dalle.routes.js'

dotenv.config();
const app = express();

const corsOptions = {
    origin: ['https://3d-modeling-tshirt.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    crendentials: true
};
app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALLE" })
})

app.listen(8080, () => console.log('Server has started at port 8080'))
