# j4n.io

[![Build Status](https://api.travis-ci.org/jotaen/j4n.io.svg)](https://travis-ci.org/jotaen/j4n.io)
[![Code Climate](https://codeclimate.com/github/jotaen/j4n.io/badges/gpa.svg)](https://codeclimate.com/github/jotaen/j4n.io)
[![Test Coverage](https://codeclimate.com/github/jotaen/j4n.io/badges/coverage.svg)](https://codeclimate.com/github/jotaen/j4n.io/coverage)
![Dependencies](https://david-dm.org/jotaen/j4n.io.svg)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

The source code of my [shortlink webservice](http://blog.jotaen.net/Toqw4/lets-build-a-rest-service).

## Usage

### Requirements

- NodeJS 5.5
- MongoDB 3.2

### Build and run

1. `npm install`
2. See configuration `app/bootstrap/config.js` and use process env vars to overwrite parameters.
3. `npm start`


### Test

Run `npm test` for the complete test-suite including linter. For the db and http tests you need to provide a mongo-db and specify its host via env variable. E.g.:

`DB_HOST=localhost:27017 npm test`

See `package.json` for the commands to run the single test suites – they are faster to execute.


## TODOs for version 1.0

- Router: Make sure, the randomly created tokens by "POST /" are in fact unique
- (Global) versioning parameter
- api.yml: Insert authentication info
