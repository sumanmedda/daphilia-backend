import express from "express"
import {
  create_user,
  get_users,
  get_user,
} from "../userController/userController.mjs"

const userRoute = express.Router()

userRoute.post("/create-user", create_user)
userRoute.post("/get-users", get_users)
userRoute.post("/get-user/:id", get_user)

export default userRoute
