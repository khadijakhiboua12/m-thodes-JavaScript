// SIMULATEUR DE PANIER D’ACHAT
const panier = [];
const catalogue = [
{ id: "A1", nom: "Pomme", prix: 5, promo: false },
{ id: "A2", nom: "Banane", prix: 2, promo: true },
{ id: "B1", nom: "Lait", prix: 3.5, promo: false }
];
// TON DÉFI : Crée ces fonctions
function ajouterAuPanier(idProduit, quantité) {
// trouver le produit
let prd=catalogue.find(function(ex){
    return  ex.id==idProduit;
})

// l’ajouter au panier

panier.push({...prd, quantité:quantité});
}
  ajouterAuPanier("A1",1);
   console.log(panier);

function calculerTotal() {
 let total=panier.reduce(function(acc,curentval){
      return acc+curentval.prix*curentval.quantité;
 },0);
         return total;
}
              console.log(calculerTotal());

 
function appliquerPromotion() {
// appliquer 10% de réduction sur les produits en promo
   let verif=catalogue.forEach(function(ex){
        if(ex.promo===true){
             ex.prix=ex.prix-10;
        }
});
  
}
   appliquerPromotion();
   console.log(panier);

function produitsChers(seuil) {
// trouver les produits au-dessus du seuil
return panier.filter(ex=>ex.prix>seuil)
}  
    console.log(produitsChers(2));

function viderPanier() {
// vider le panier
  panier.length=0;
}
    viderPanier();
 console.log(panier);