const express = require('express')
const router = express.Router()

const sponsors = require('../js/sponsors')
const expositors = require('../js/expositors')
const schedule = require('../js/schedule')

// Home Page
router.get('/', (req, res) => res.render(
    'home/home.ejs', 
    { 
        title: 'Auspicios',
        sponsors,
        schedule
    }
))


// Expositors Page
router.get('/expositors', (req, res) => res.render(
    'expositors/expositors.ejs', 
    { 
        title: 'Expositors',
        expositors
    }
))

// Schedule Page
router.get('/schedule', (req, res) => res.render(
    'schedule/schedule.ejs', 
    { 
        title: 'Schedule',
        schedule
    }
))


module.exports = router