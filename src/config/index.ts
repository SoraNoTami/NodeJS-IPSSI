import e from "express";

process.env.NODE_ENV = process.env.NODE_ENV || 'developement'

const stage = process.env.NODE_ENV || 'local'
let envConfig;

if (stage == 'production') {
    envConfig = require('./production').default
} else if (stage == 'local') {
    envConfig = require('./local').default
} else if (stage == 'staging'){
    envConfig = require('./staging').default
} else {
    envConfig = require('./local').default
}