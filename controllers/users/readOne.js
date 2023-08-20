import User from "../../models/User.js";

export default async (req, res) => {
    
    try{
  
        let oneUser = await User.findOne({ _id:req.params.user_id }).select("mail photo -_id")
        if (oneUser) {
          return res.status(200).json({
            success: true,
            message: 'user found',
            response: oneUser
          })
        }else {
          return res.status(200).json({
            success: false,
            message: 'not found',
            response: oneUser
          })
        }
      } catch(error){
        next(error)
      }
}