const express = require('express')
const router = express.Router()


const sponsors = [
    [
        { name: 'Samsung', src: 'img/sponsors/samsung.png' },
        { name: 'ebay', src: 'img/sponsors/ebay.png' },
        { name: 'Forever 21', src: 'img/sponsors/forever21.png' },
        { name: 'Huawei', src: 'img/sponsors/huawei.png' },
        { name: 'SBIAE', src: 'img/sponsors/sbiae.png' }
    ],
    [
        { name: 'Samsung', src: 'img/sponsors/samsung.png' },
        { name: 'ebay', src: 'img/sponsors/ebay.png' },
        { name: 'Forever 21', src: 'img/sponsors/forever21.png' },
        { name: 'Huawei', src: 'img/sponsors/huawei.png' },
        { name: 'SBIAE', src: 'img/sponsors/sbiae.png' }
    ],
    [
        { name: 'Samsung', src: 'img/sponsors/samsung.png' },
        { name: 'ebay', src: 'img/sponsors/ebay.png' },
        { name: 'Forever 21', src: 'img/sponsors/forever21.png' },
        { name: 'Huawei', src: 'img/sponsors/huawei.png' },
        { name: 'SBIAE', src: 'img/sponsors/sbiae.png' }
    ],
    [
        { name: 'Samsung', src: 'img/sponsors/samsung.png' },
        { name: 'ebay', src: 'img/sponsors/ebay.png' },
        { name: 'Forever 21', src: 'img/sponsors/forever21.png' },
        { name: 'Huawei', src: 'img/sponsors/huawei.png' },
        { name: 'SBIAE', src: 'img/sponsors/sbiae.png' }
    ],
    [
        { name: 'Samsung', src: 'img/sponsors/samsung.png' },
        { name: 'ebay', src: 'img/sponsors/ebay.png' },
        { name: 'Forever 21', src: 'img/sponsors/forever21.png' },
        { name: 'Huawei', src: 'img/sponsors/huawei.png' },
        { name: 'SBIAE', src: 'img/sponsors/sbiae.png' }
    ]
]
const schedule = [
    [
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'green',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        },
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'green',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        },
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'green',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        }
    ],
    [
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'turquoise',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        },
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'turquoise',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        },
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'turquoise',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        }
    ],
    [
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'fuchsia',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        },
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'fuchsia',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        },
        {
            name: 'Cecilia Roberts',
            hour: '10.00 - 11.00',
            class: 'fuchsia',
            description: 'Plenary Session: Laying the foundations for future success with the new consumer'
        }
    ]
]

// Home Page
router.get('/', (req, res) => res.render(
    'home/home.ejs', 
    { 
        title: 'Auspicios',
        sponsors,
        schedule
    }
))


module.exports = router