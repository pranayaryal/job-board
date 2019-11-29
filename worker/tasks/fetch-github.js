var fetch = require('node-fetch');

var redis = require("redis"),
    client = redis.createClient();

const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL= 'https://jobs.github.com/positions.json';

const fetchGithub = async() => {

    console.log('Fetching github ...');
    let resultCount = 1, onPage = 0;

    const allJobs = [];

    //fetch all pages
    while (resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`); 
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log(`got ${resultCount} jobs`);
        onPage++;
    }

    //filter algo
    const jrJobs = allJobs.filter(jobs => {
        console.log('hello')
    });

    //set in redis
    console.log(`got ${allJobs.length} jobs in total`)
    const success = await setAsync('github', JSON.stringify(allJobs));

    console.log({success})

}

module.exports = fetchGithub;