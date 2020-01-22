const express = require('express')
const router = express.Router()

const sponsors = require('../js/sponsorsData')
const expositors = require('../js/expositorsData')
const schedule = require('../js/scheduleData')
const { registerType, tickets, price } = require('../js/registerData')

// Home Page
router.get('/', (req, res) => res.render(
    'home/home.ejs', 
    { 
        title: '6to Foro latinoamericano',
        sponsors: sponsors.sponsors,
        sponsorTypes: sponsors.sponsorTypes,
        schedule,
        expositors
    }
))


// Expositors Page
router.get('/expositors', (req, res) => res.render(
    'expositors/expositors.ejs', 
    { 
        title: 'Expositores',
        expositors
    }
))

// Schedule Page
router.get('/schedule', (req, res) => res.render(
    'schedule/schedule.ejs', 
    { 
        title: 'Programa',
        schedule
    }
))

// Stay Page
router.get('/stay', (req, res) => res.render(
    'stay/stay.ejs', 
    { 
        title: 'Información turística'
    }
))

// Papers Page
router.get('/papers', (req, res) => res.render(
    'papers/papers.ejs', 
    { 
        title: 'Trabajos de investigación'
    }
))


// Contact Page
router.get('/contact', (req, res) => res.render(
    'contact/contact.ejs', 
    { 
        title: 'Contacto'
    }
))


// Register Page
router.get('/register', (req, res) => res.render(
    'register/register.ejs', 
    { 
        title: 'Register',
        registerType,
        tickets,
        price
    }
))




module.exports = router