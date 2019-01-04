import redis from 'redis'
import bluebird from 'bluebird'
import {host,port} from "../constant/redis";

bluebird.promisifyAll(redis)

const client = redis.createClient({
    host,
    port
})

client.on("error", function (err) {
    console.log("Error " + err);
});
