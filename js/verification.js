document.addEventListener('DOMContentLoaded', () => {
    const champsAValider = document.querySelectorAll('.validation')

    champsAValider.forEach(champ => {
        champ.addEventListener('change', (e) => {
            validation(e.target)
        })
    })
})

let messagesErreurs = []

const validation = (e) => {
    //en fonction du type de donnée, je vais appeler la fonction de validation correspondante
    messagesErreurs = [] //on efface toutes les erreurs précédentes
    if (e.dataset.required === 'true') {
        console.log(e.value.length)
        if (e.value.length === 0) {
            e.classList.remove('is-valid')
            e.classList.add('is-invalid')
            messagesErreurs.push('Ce champs est obligatoire. Vous devez saisir une valeur')
        }
    }

    if (e.dataset.type === 'text') {
        validationText(e)
    } else if (e.dataset.type === 'email') {
        console.log('mail')
        validationEmail(e)
    }

    e.parentNode.querySelector('.invalid-feedback').innerHTML = messagesErreurs.join('<br>')
}

const validationText = (e) => {
    //vérification de la taille min et max
    if (e.value.length < e.dataset.min) {
        e.classList.remove('is-valid')
        e.classList.add('is-invalid')
        //ajout d'un message explicatif
        messagesErreurs.push('Minimum ' + e.dataset.min + ' caractères.')
    } else if (e.value.length > e.dataset.max) {
        e.classList.remove('is-valid')
        e.classList.add('is-invalid')
        messagesErreurs.push('Maximum ' + e.dataset.max + ' caractères.')
    } else {
        e.classList.remove('is-invalid')
        e.classList.add('is-valid')
    }
}

const validationEmail = (e) => {
    const globalRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", 'g');

    if (globalRegex.test(e.value) !== true){
        e.classList.remove('is-valid')
        e.classList.add('is-invalid')
        messagesErreurs.push('Adresse mail correcte demandée.')
    }
    else {
        e.classList.remove('is-invalid')
        e.classList.add('is-valid')
    }
    
    console.log(globalRegex.test(e.value));
}
