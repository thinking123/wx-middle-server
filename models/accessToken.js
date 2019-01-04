import mongoose from 'mongoose'



const accessTokenSchema = new mongoose.Schema({
    accessToken:String,
    expiresIn:Number
})


const accessToken = mongoose.model('AccessToken' , accessTokenSchema)


export default accessToken