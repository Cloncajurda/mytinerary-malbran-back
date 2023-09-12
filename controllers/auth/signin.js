export default (req, res, next)=>{
    try {
        return res.status(200).json({
            succes: true,
            message: 'user logged in',
            response: { //Token + user data
                token: req.token,
                user: req.user
            } 
        })
    }catch (error) {
        next(error)
    }
}