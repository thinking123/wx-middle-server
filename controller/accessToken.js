import AccessToken from '../models/accessToken'
import getAccessTokenTask from '../tasks/accessToken'
import {asyncWrap} from "../utils";

async function getAccessToken(req , res) {
    const force = req.query.force

    if(force){
        await getAccessTokenTask()
    }

    let tokens = await AccessToken.findOne({})
    if(tokens.length === 0){
        await getAccessTokenTask()
        tokens = await AccessToken.findOne({})
    }
    const token = tokens.length > 0 ? tokens[0] : {error:'no token'}

    res.send(token)
}

export default function registerRoutes(app) {
    app.get('/access-token' , asyncWrap(getAccessToken))
}