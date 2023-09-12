import jwt from 'jsonwebtoken'

export default (req,res,next)=>{
    try {
        let token = jwt.sign(
            { mail:req.user.mail}, //este es el objeto para convertir en TOKEN que iddentifica al usuario
            process.env.SECRET_KEY,  //esta es la palabra "llave" para tokenizar
            {expiresIn: 60*60*24*7} // plazo de expiracion medido en segundos
        )
        req.token=token
        console.log(req.token);
        return next()
    } catch (error) {
    return next(error)
}   
}