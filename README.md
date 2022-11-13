# Trackify

## Run on localhost:3000
**$ docker-compose up -d** <br />
$ docker-compose up -d --build <br />
$ docker-compose down <br />


## TODO
° Finish Spotify clone skeleton <br />
° React Router <br />
° Incorporate Jest testing <br />
° Set up hosting with AWS Elastic Beanstalk / Heroku <br />
° Look into how Docker handles requirements and dependencies - How to update them as the project progresses <br />
° Update Dockerfile to run JSDoc <br />
° Add Spotify statistics to Trackify <br />

## Run with docker
$ docker pull lukemoenning/trackify <br />
**$ docker run -d -p 3000:3000 --name trackify lukemoenning/trackify** <br />
$ docker build -t lukemoenning/trackify . <br />
$ docker exec -it trackify bash <br />

 
## Run with npm <br />
$ npm start <br />

## Update package.json
$ npx npm-check-updates -u <br />
$ npm install <br />

## JSDoc
$ open out/index.html <br />
$ jsdoc -r src/ <br />

## Spotify for Developers
link to trackify app -> https://developer.spotify.com/dashboard/applications/5fe24f726a784ced9a2133098d1b6db1 <br />

## React Context API
° Creates a **data layer** to handle variables <br />
° Similiar to Redux <br />
° Principle of Least Knowledge and prevents tightly coupled code <br />

