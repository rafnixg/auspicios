
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



/*const children = input.parentNode().children()
console.log(children)*/

