import express from "express"
import {
  create_user,
  get_users,
  get_user,
} from "../userController/userController.mjs"

const userRoute = express.Router()

userRoute.post("/create-user", create_user)
userRoute.get("/get-users", get_users)
userRoute.get("/get-user/:id", get_user)

export default userRoute
