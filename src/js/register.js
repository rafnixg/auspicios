// REGISTER TABS
const nextButton = document.getElementById('next')

if (nextButton) {
    nextButton.addEventListener('click', (event) => {
        // jQuery for Boostrap Tabs
        $('a[aria-selected=true]').parent('li').next().children('a').tab('show')
        const tab = $('a[aria-selected=true]').attr('href')
        
        if (tab === '#confirm') {
            const actionButtons = document.getElementById('action-buttons')
            actionButtons.classList.add('d-none')
        }
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