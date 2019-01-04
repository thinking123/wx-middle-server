import dotenv from 'dotenv'
import path from 'path'

console.log('env' , process.env.NODE_ENV)
if(process.env.NODE_ENV === 'dev'){
    console.log('path' , path.resolve(process.cwd() , '.env.dev'))
    dotenv.config({path: path.resolve(process.cwd() , '.env.dev')})
}else{
    console.log('use env default')
    dotenv.config()
}
