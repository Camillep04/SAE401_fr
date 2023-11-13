/*** Fonction qui permet le changement du title dans l'onglet de la page quand l'utilisateur change de page */
$(function() {
    // Recup titre de la page
    var pageTitle = $("title").text();
    // Changement dynamique du title
    $(window).blur(function() {
    $("title").text("🔥 Reviens sale lâche");
    });
    // Recup titre initial lorsque page active
    $(window).focus(function() {
    $("title").text(pageTitle);
    });
    });
/*** Fin de la fonction pour le title */

let panier = {}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('panier') === null ) {
        panier = { products: [] }
    }
    else {
        panier = JSON.parse(localStorage.getItem('panier'))
        totalProduit()
    }
    
    const btns = document.querySelectorAll('.add-to-card')
        btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            //console.log(e.target.parentElement.parentElement.children[0].innerHTML)
            
            document.getElementById('cart').innerText = parseInt(document.getElementById('cart').innerText) + 1;
            // vérification de la présence du produit dans le panier
            const product = panier.products.find(product => product.id ==  parseInt(e.target.dataset.id))
            //const product = panier.products.find(product => product.id == 3)
            //console.log(product)

            if (product !== undefined){
                product.quantity++
                console.log("ajouté " +product.quantity);
            } else {
                
                const product ={
                    "id": parseInt(e.target.dataset.id),
                    "name": e.target.parentElement.parentElement.children[0].innerHTML,
                    "price": parseFloat(e.target.parentElement.parentElement.children[2].innerHTML),
                    "quantity": 1,
                    "image": e.target.parentElement.parentElement.children[0].src
                    //e.target.parentElement.parentElement.parentElement.querySelector('img').src
                }
                console.table(product);
                panier.products.push(product)
            }

            //document.getElementById('cart').innerText = panier.products.length
            totalProduit()
            localStorage.setItem('panier', JSON.stringify(panier))
        })
    })
    $('#exampleModal').on('shown.bs.modal', function () {
        $('#exampleModal').trigger('focus')
      })

});

const totalProduit = () => {
    let nbProduits = 0
    if(panier){
        panier.products.forEach(product => {
                nbProduits += product.quantity
        })
    }
    document.getElementById('cart').innerHTML = nbProduits
}
