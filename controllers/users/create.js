import User from "../../models/User.js";

export default async(req,res) => {
    try{
      console.log(req.body)
      let newUser = await User.create(req.body)
      return res.status(201).json({
        success: true,
        message: 'user created',
        response: newUser._id
      })
    } catch(err){
      return res.status(400).json({
        success: false,
        message: 'user not created',
        response: null
      })
    }

}