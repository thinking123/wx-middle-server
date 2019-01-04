import mongoose from 'mongoose'
import {modelDbUrl} from "../constant/mongodb";

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongodb connected')
});

mongoose.connect(modelDbUrl)


