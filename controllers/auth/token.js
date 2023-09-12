export default (req, res, next)=>{
    try {
        return res.status(200).json({
            succes: true,
            message: 'user logged in with token',
            response: { //Token + user data
                token: req.token,   //nuevo token por cada recarga
                user: req.user      //datos del usuario que no vienen por formulario
            } 
        })
    }catch (error) {
        next(error)
    }
}