# job-board
Job Board based on github jobs api

This application fetches jobs from github jobs api and stores it in redis.  It updates job every hour.  The api then fetches the jobs
from redis and serves it in the front-end.

In the root folder, do:
`npm install`

Also inside the folder `client/`, do:
`npm install`

Open a terminal and go to the root of the folder.  
Then do `node api/index.js`

Open another terminal and do
```
cd client
yarn start
```
