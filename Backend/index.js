const express = require('express')
const app = express()
const cors=require("cors")
const {connectMongodb} = require('./config/connection')
const userRouter = require('./routes/register')

app.use(cors({
  origin: 'http://localhost:3000', // Frontend origin (React app)
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

connectMongodb( "mongodb+srv://utopiapetshop111:Utopiapetshop%40111@cluster0.vvc09.mongodb.net/user").then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => console.log("Mongo error", err));
app.use(("/register"),userRouter)
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{console.log(`server at http://localpost:${PORT}`)})