import AccessToken from '../models/accessToken'
import getAccessTokenTask from '../tasks/accessToken'
import {asyncWrap} from "../utils";

async function getAccessToken(req , res) {
    const force = req.query.force

    console.log("force" , force)
    if(force){
        await getAccessTokenTask()
    }

    let token = await AccessToken.findOne({} , ["accessToken" , "expiresIn"])
    if(!token){
        await getAccessTokenTask()
        token = await AccessToken.findOne({})
    }


    token = token ? token : {error:'no token'}

    res.send(token)
}

export default function registerRoutes(app) {
    app.get('/access-token' , asyncWrap(getAccessToken))
}