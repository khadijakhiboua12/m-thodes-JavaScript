// DONNÉES DE DÉPART
const produits = [
{ id: 1, nom:"Ordinateur", prix: 999, catégorie: "électronique", stock: 5},
{ id: 2, nom: "T-shirt", prix: 25, catégorie: "vêtement", stock: 0 },
{ id: 3, nom: "Livre JS", prix: 35, catégorie: "livre", stock: 12 }
];

// TES MISSIONS :
// 1. Trouve tous les produits en stock (stock > 0)
let enstoke=produits.filter(function(ex){
     return ex.stock>0;
});
 console.log(enstoke);

// 2. Calcule le prix total de tous les produits
let totalprix=produits.reduce(function(acc,cuurentval){
      return acc+cuurentval.prix;
},0);
     

 console.log(totalprix);
// 3. Crée un tableau des noms de produits en majuscules
let nom=produits.map(function(ex){
    return ex.nom.toLocaleUpperCase();
});
   console.log(nom);
// 4. Vérifie si tous les produits coûtent plus de 20€
let verifie=produits.every(function(ex){
      return ex.prix>20;
})
  console.log(verifie);

// 5. Trouve le produit avec l’id 2
let produitid=produits.find(function(ex){
      return ex.id=2;
});
   console.log(produitid);

// 6. Ajoute un nouveau produit à la fin
let nouveProduit={
    id:3,
    nom:"dell",
    prix:40,
    catégorie: "électronique",
    stock:12
};
produits.push(nouveProduit);
 console.log(produits);
// 7. Enlève/supprimer le premier produit
produits.shift();
console.log(produits);

// 8. Trie les produits par prix (croissant)
produits.sort(function(a,b){
    return a.prix-b.prix;
});
 console.log(produits);