var CronJob = require('cron').CronJob;


var redis = require("redis"),
    client = redis.createClient();

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

const setAsync = promisify(client.get).bind(client);

const fetchGithub = require('./tasks/fetch-github');

new CronJob('* * * * * ', fetchGithub, null, true, 'America/Los_Angeles');