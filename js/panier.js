const data = JSON.parse(localStorage.getItem('panier'))
  
document.addEventListener('DOMContentLoaded', () => {
      //Le dom est chargé,  votre code ici...
    const panier = document.getElementById('panier');
    const tbody = document.createElement('tbody'); //si le body n'existe pas dans l'html
    panier.appendChild(tbody);
    let totalPanier = 0;

    if (data != null){
      data.products.forEach(product => {
          //Ajouter une ligne au tableau
          const tr = document.createElement('tr');
          tr.innerHTML = 
          `<th class="align-middle allArticle"> 
            <img src="${product.image}" id="${(product.id)}"  alt ="${product.name}" style ="width : 100px"></img> 
            ${product.name} 
          </th> 
          <td class="align-middle">
            ${formatPrice(product.price)} 
          </td> 
          <td class="align-middle"> 
            <div class="input-group mb-3"> 
              <button class="btn btn-outline-secondary btn-panier-add" type="button" data-sens="moins" data-id="${(product.id)}" data-price=" ${formatPrice(product.price)} "> - </button> 
              <input type="number" class="form-control" value="${(product.quantity)}" aria-label="" aria-describedby="basic-addon1"> 
              <button class="btn btn-outline-secondary btn-panier-add" type="button" data-sens="plus" data-id="${(product.id)}" data-price="${formatPrice(product.price)} "> + </button> 
            </div> 
          </td> 
          <td class="align-middle">
            ${formatPrice(product.price*product.quantity)}
          </td> 
          <td class="align-middle"> 
            <button class="btn rouge_fonce text-light btn-panier-del">Supprimer </button> 
          </td>`;

          totalPanier += product.quantity * product.price
          tbody.appendChild(tr);
      });
    }
    
    calculPrixPanier(totalPanier)

    const btns = document.querySelectorAll('.btn-panier-add')
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btn =e.target
            const price = btn.dataset.price
            const input = btn.parentElement.querySelector('input')
            if (btn.dataset.sens == 'moins'){
              if (parseInt(input.value) > 0) {
                input.value = parseInt(input.value) - 1
                totalPanier -= parseFloat(price)
              }
            }
            else {
              input.value = parseInt(input.value) + 1 //on augmente la quantité de 1
              totalPanier += parseFloat(price)
            }

            //On met à jour la quantité avec le localStorage
            const idProduit = e.target.dataset.id
            product = data.products.find(product => product.id == idProduit)
            product.quantity = parseInt(input.value)
            //const price = product.price 

            const totalPrixProduit = e.target.parentElement.parentElement.nextElementSibling
            totalPrixProduit.innerHTML = `${formatPrice(parseInt(input.value) * parseFloat(price))}`
            
            calculPrixPanier(totalPanier)
        })
    })

  const inputs = document.querySelectorAll('.form-control')
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        console.log('changé')
    })
  })
    

    const btnsuppr = document.querySelectorAll('.btn-panier-del')
    btnsuppr.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const ligne = e.target.parentElement.parentElement;
        
        const totalPrixProduit = ligne.querySelector('td:nth-child(4)').innerHTML;
        totalPanier -= parseFloat(totalPrixProduit);
        
        ligne.remove();

        const idProduct = e.target.dataset.id;

        product = data.products.findIndex(product => product.id == idProduct)
        data.products.splice(product, 1)
        
        calculPrixPanier(totalPanier);
      })
    })

    const btnsupprAll = document.querySelectorAll('.btn-delAll')
    btnsupprAll.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const allArticle = btnsuppr[0].parentElement.parentElement.parentElement
        calculPrixPanier(0);

        localStorage.setItem('panier', '{"products":[]}');

        allArticle.remove()
      })
    })

    
 
  });

const formatPrice = (price) => {
    return price.toFixed(2).replace('.', ',') + ' XPF';
}

const calculPrixPanier = (totalPanier) => {
  localStorage.setItem('panier', JSON.stringify(data))
      let fraisLivraison = 200
      let reduction = 0

      if (totalPanier != 0) {
        document.getElementById('PrixTotal').innerHTML = formatPrice(totalPanier)

        if (totalPanier > 8000){
          fraisLivraison = 0
        }

       
      
        document.getElementById('reduction').innerHTML = formatPrice(reduction)
        document.getElementById('totalPayer').innerHTML = formatPrice(totalPanier + fraisLivraison - reduction)
      }

      else {
        console.log(document.getElementById('PrixTotal'));
        document.getElementById('PrixTotal').innerHTML = 0
        
        document.getElementById('montantTva').innerHTML = 0
        document.getElementById('fraisLivraison').innerHTML = 0
        document.getElementById('reduction').innerHTML = 0
        document.getElementById('totalPayer').innerHTML = 0
      }
}


