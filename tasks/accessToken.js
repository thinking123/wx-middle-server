import request from 'request'
import AccessToken from '../models/accessToken'

const appId = process.env.APPID
const secret = process.env.APPSECRET
const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${secret}`

/*
* get wechat access token
* https请求方式: GET
https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
* */

async function getAccessToken(){
    return new Promise((resolve, reject) => {
        request.get(url)
            .on('error', function (err) {
                reject(err)
            })
            .on('response', function (response) {
                if (response.statusCode != 200) {
                    reject(`status code : ${response.statusCode}`)
                }

                console.log('get access token :', response.body)

                resolve(response.body)
            })


    })
}

async function getTask() {
    const {access_token, expires_in} = await getAccessToken()
    return await saveToken(access_token, expires_in)
}

async function saveToken(access_token, expires_in) {


    await AccessToken.remove({})

    const token = new AccessToken({
        accessToken: access_token,
        expiresIn: expires_in
    })

    return await token.save()
}


export default async function () {
    return await getTask()
}




