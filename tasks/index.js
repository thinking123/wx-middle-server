import {agendaDbUrl} from "../constant/mongodb";
import Agenda from 'agenda'
import getAccessToken from './accessToken'

const agenda = new Agenda({db : {address : agendaDbUrl}})
let count = 0
agenda.processEvery('5 minute');

agenda.define('accessToken' , (job , done) => {
    (async ()=>{
        try{
            console.log('start access token job , count : ' , count++)
            await getAccessToken();
        }catch (e) {
            console.log('error in task :' ,e)
        }

    })().then(done , done)
})

agenda.on('start' , job =>{
    console.log('Job %s starting', job.attrs.name);
})
agenda.on('complete', job => {
    console.log(`Job ${job.attrs.name} finished`);
});

(async function() { // IIFE to give access to async/await
    await agenda.start();

    await agenda.every('90 minutes', 'accessToken');
})();


export default agenda