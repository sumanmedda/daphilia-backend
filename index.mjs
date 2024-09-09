import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRoute from "./users/userRoute/userRoute.mjs"

const app = express()
dotenv.config()
app.use(bodyParser.json())

const port = process.env.PORT || 5000
const mongo_url = process.env.MONGO_URL

mongoose.connect(mongo_url).then(() => {
  console.log("Connected to DB")
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
})

app.use("/api/user", userRoute)
