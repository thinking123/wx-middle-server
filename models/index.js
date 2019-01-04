import mongoose from 'mongoose'
import Promise from 'bluebird'
import {modelDbUrl} from "../constant/mongodb";

mongoose.Promise = Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongodb connected')
});

mongoose.connect(modelDbUrl)


