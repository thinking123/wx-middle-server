import mongoose from 'mongoose'



const accessTokenSchema = new mongoose.Schema({
    accessToken:'string',
    expiresIn:'string'
})


const accessToken = mongoose.model('AccessToken' , accessTokenSchema)


export default accessToken