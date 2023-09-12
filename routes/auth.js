import { Router } from "express";


import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import token from "../controllers/auth/token.js";
import signout from "../controllers/auth/signout.js";

import existUser from "../middlewares/existUser.js";
import validator from "../middlewares/validator.js";
import isValidPass from "../middlewares/isValidPass.js";
import notExistUser from "../middlewares/notExistUser.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";
import passport from "../middlewares/passport.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";

let authRouter = Router()

authRouter.post(
    '/register',
    validator(registerSchema),
    existUser, 
    isValidPass, 
    register
)
authRouter.post(
    '/signin', 
    validator(signinSchema),
    notExistUser,
    isPassOk,
    isValidToken,
    signin
)
authRouter.post(
    '/token',
    passport.authenticate('jwt', {session:false}),
    isValidToken, //el middleware para generar el nuevo token. Es el mismo que isValidToken
    token
);

authRouter.post(
    "/signout", 
    passport.authenticate('jwt', {session: false}),
    signout
);

export default authRouter

