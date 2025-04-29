import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import providerRouter from './routes/providerRoute.js';
import userRouter from './routes/userRoute.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

//middleware
app.use(express.json());
app.use(cors());

//api endpoint
app.use('/api/admin', adminRouter);
app.use('/api/providers', providerRouter);
app.use('/api/user', userRouter)

app.get('/', (req,res)=>{
    res.send('API Working!')
})

app.listen(port, () => {
    console.log("Server is started",port);
});