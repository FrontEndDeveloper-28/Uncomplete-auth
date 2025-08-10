import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";

connectDB();

const app = express();
const port = process.env.PORT || 4000

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000' }))


app.get('/', (req,res)=> res.send("API Working"));

app.listen(port, ()=> console.log(`server started on PORT:${port}`))