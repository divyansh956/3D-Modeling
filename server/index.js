import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import dalleRoutes from './routes/dalle.routes.js'

dotenv.config();
const corsOptions = {
  origin: 'https://3d-modeling-rho.vercel.app',
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json({limit: "50mb"}))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/',(req, res) => {
    res.status(200).json({message: "Hello from DALLE"})
})

app.listen(8080, ()=>console.log('Server has started at port 8080'))
