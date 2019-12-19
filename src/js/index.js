
const body = document.body


// MENU
const menuButton = document.getElementById('menu')
const closeButton = document.getElementById('close')
const navbar = document.getElementById('navbar')

menuButton.addEventListener('click', (event) => {
    navbar.classList.remove('slide-out-right-100')
    navbar.classList.add('slide-in-right-100')
    body.classList.add('modal-open')
})

closeButton.addEventListener('click', (event) => {
    navbar.classList.remove('slide-in-right-100')
    navbar.classList.add('slide-out-right-100')
    body.classList.remove('modal-open')
})


// INPUTS
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('focus', (event) => {
        const focusInput = event.target
        const label = focusInput.parentNode.children[0]

        focusInput.classList.add('active')
        label.classList.add('active')
    })

    input.addEventListener('blur', (event) => {
        const focusInput = event.target
        const label = focusInput.parentNode.children[0]
        focusInput.classList.remove('active')

        if (!input.value) {
            label.classList.remove('active')
        }
    })
})

// VIDEO
const video = document.getElementById('video')
const playButton = document.getElementById('play')

if (video && playButton) {
    playButton.addEventListener('click', (event) => {
        if (video.paused) {
            video.play()
            playButton.classList.add('fade-out')
        } else {
            video.pause()
        }
        
    })

    playButton.addEventListener('mouseover', (event) => {
        playButton.classList.remove('fade-out')
        playButton.classList.add('fade-in')
    })
    
    video.addEventListener('mouseover', (event) => {
        if (!video.paused) {
            playButton.classList.remove('fade-out')
            playButton.classList.add('fade-in')
        }
    })
    
    video.addEventListener('mouseout', (event) => {
        if (!video.paused) {
            playButton.classList.remove('fade-in')
            playButton.classList.add('fade-out')
        }
    })
}


// REGISTER TABS
const nextButton = document.getElementById('next')

if (nextButton) {
    nextButton.addEventListener('click', (event) => {
        // jQuery for Boostrap Tabs
        console.log($('a[aria-selected=true]'));
        $('a[aria-selected=true]').parent('li').next().children('a').tab('show')
    })
}

// REGISTER FORM 
const addAssistantButton = document.getElementById('addAssistant')

if (addAssistantButton) {
    addAssistantButton.addEventListener('click', (event) => {
        const forms = document.getElementsByName('assistantForm')
        const form = document.createElement('form')
        form.setAttribute('name', 'assistantForm')
        form.innerHTML = forms[0].innerHTML

        const formsContainer = document.getElementById('forms')
        formsContainer.appendChild(form)
    })
}


// MAP
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        styles: 
        [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#a8afbf"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#373d48"
                    },
                    {
                        "weight": 2
                    },
                    {
                        "gamma": "1"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "weight": 0.6
                    },
                    {
                        "color": "#4c576f"
                    },
                    {
                        "gamma": "0"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#424c65"
                    },
                    {
                        "gamma": "1"
                    },
                    {
                        "weight": "10"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4c576f"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#424d66"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#37425c"
                    },
                    {
                        "lightness": "0"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4c576f"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2b364f"
                    }
                ]
            }
        ]
    });
}