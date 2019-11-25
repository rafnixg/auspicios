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