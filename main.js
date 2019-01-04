import express from 'express'
import './models'
import './tasks'
import registerRouter from './controller'
import {port} from "./constant";

const app = express()
app.set('port' , port)

registerRouter(app)


app.use(function(err, req, res, next){
    res.status(err.status || 500)
    res.json(error)
})
app.use(function(req, res){
    res.type('text/plain')
    res.status(404)
    res.send("404 error")
})

app.listen(port, function(){
    console.log(`Express started on http://localhost:${port} , env : ${process.env.NODE_ENV}`)
})