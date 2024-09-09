import userModel from "../userModel/userModel.mjs"

export const create_user = async (req, res) => {
  try {
    const user = new userModel(req.body)
    const userName = await userModel.findByOne({ username: req.body.username })
    const userEmail = await userModel.findByOne({ email: req.body.email })
    if (userName) {
      return res.status(400).json({ message: "Username already exists" })
    } else if (userEmail) {
      return res.status(400).json({ message: "Email already exists" })
    }
    await user.save()
    return res.status(201).json({ message: "User created successfully", user })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const get_users = async (req, res) => {
  try {
    const users = await userModel.find()
    return res
      .status(200)
      .json({ message: "Users fetched successfully", users })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const get_user = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    return res.status(200).json({ message: "User fetched successfully", user })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
