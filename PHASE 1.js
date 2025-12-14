   
 // ==============================
// MÉTHODE :filter()
// ==============================
/* 1. MA DÉFINITION PERSONNELLE
la methode filter() :creer un nouveau tableau contenat uniquement les Elements qui respectent une condition que tu definis

// 2. PARAMÈTRES ACCEPTÉS
filter(callbackFn)
filter(callbackFn, thisArg)
// Qu’est-ce que je peux mettre entre les parenthèses ?
callbackFn:  une fonction a executer pour chaque element du tableau .
elle doit retourner une valeur vraie pour concerver lelement dans  le tableau resultat.
et une valeur fausse sinon .la fonction est appele avec les arguments suivantes:
(elemnt,index,Array)
thisArg: valeur a utiliser comme this lors de lexecution de callbackFn.


// 3. CE QU’ELLE RETOURNE
un nouveau tableau contenant  uniquement les elements qui passent en Test 
si aucun eleement ne passe le test ,un tableau vide est renvoye;

// 4. QUAND L’UTILISER ?
on utilise filer() lorsqu'on veut crer un nouveau tableau contenat uniquement les elements
qui respectent une conditions;

// Dans quelles situations cette méthode est utile ?
Sélectionner des éléments spécifiques
Filtrer des objets selon une propriété
Extraire des éléments selon une logique complexe

// 5. CE QU’ELLE NE FAIT PAS
Ne modifie pas le tableau original
Ne retourne pas un seul élément

*/
 
 // ==============================
// MÉTHODE :map
// ==============================
/* 1. MA DÉFINITION PERSONNELLE
La méthode map() des instances de Array crée un nouveau tableau rempli 
avec les résultats de l'appel d'une fonction fournie sur
chaque élément du tableau appelant.

// 2. PARAMÈTRES ACCEPTÉS
map(callbackFn)
map(callbackFn, thisArg)

// Qu’est-ce que je peux mettre entre les parenthèses ?
callbackFn:  une fonction a executer pour chaque element du tableau .
elle doit retourner une valeur vraie pour concerver lelement dans  le tableau resultat.
et une valeur fausse sinon .la fonction esr appele avec les arguments suivantes:
elemnt,index,Array
thisArg: valeur a utiliser comme this lors de lexecution de callbackFn.

// 3. CE QU’ELLE RETOURNE
Un nouveau tableau composé des images de la fonction de rappel.

// 4. QUAND L’UTILISER ?
Quand tu veux transformer chaque élément d’un tableau sans toucher au tableau original.
Quand tu veux créer un nouveau tableau avec les résultats de la transformation.
Quand tu veux garder la même longueur de tableau mais changer le contenu de chaque élément.

// 5. CE QU’ELLE NE FAIT PAS
Ne modifie pas le tableau original
 Ne filtre pas les éléments
/*


)
// ==============================
// MÉTHODE :reduce();
// ==============================
// 1. MA DÉFINITION PERSONNELLE

La méthode javascript reduce est utilisée pour appliquer une
fonction à chaque élément du tableau afin de réduire 
le tableau à une seule valeur.


// 2. PARAMÈTRES ACCEPTÉS
accumulator:C’est la valeur que la fonction reduce()
construit petit à petit.
currentValue:c’est l’élément suivant du tableau.
currentIndex:position
array


// 3. CE QU’ELLE RETOURNE
retourne toujours une seule valeur ,cette valeur peut etre n'importe quel type
number/string/array/object/boolean

// 4. QUAND L’UTILISER ?
lorsqu'on veut transformer un tableau en une seule valeur
Faire des calculs sur tous les éléments

// 5. CE QU’ELLE NE FAIT PAS
 Ne crée pas de nouveau tableau automatiquement
Ne filtre pas automatiquement
Ne modifie pas le tableau original
*/



/*
// ==============================
// MÉTHODE :find()
// ==============================
// 1. MA DÉFINITION PERSONNELLE
envoie le premier élément du tableau fourni qui satisfait

la fonction de test. Si aucune valeur ne satisfait la
fonction de test, undefined est renvoyé.
elle ne parcourt le tableau que jusqu'au premier  resultat qui 
correspond a la condition.

// 2. PARAMÈTRES ACCEPTÉS
element
L'élément actuellement traité dans le tableau.
index
L'indice de l'élément actuellement traité dans le tableau.
array
Le tableau complet



// 3. CE QU’ELLE RETOURNE
retourne le premier element qui satisfait la condition
si aucun element ne correspond =>retourn undefined.


// 4. QUAND L’UTILISER ?
Quand tu veux trouver un élément précis dans un tableau.
Quand tu ne veux que le premier résultat correspondant à une condition.


// 5. CE QU’ELLE NE FAIT PAS
Ne continue pas après le premier élément trouvé
les autres éléments ne sont pas testés.
Ne modifie pas le tableau original
Ne filtre pas tous les éléments

*/



/*
// ==============================
// MÉTHODE :includes()
// ==============================
// 1. MA DÉFINITION PERSONNELLE
determiner si un tableau inclut une certaine valeur parmi ses
entrees ,renvoyer true ou  false selon le cas

// 2. PARAMÈTRES ACCEPTÉS
includes(searchElement)
La valeur à rechercher.
includes(searchElement, fromIndex)
fromIndex:
Index à base zéro à partir duquel commencer la recherche,
converti en entier.

// 3. CE QU’ELLE RETOURNE
true: si l'eelement tu charche est existe dans string ou array
false:si l'elelement tu charche pas present

// 4. QUAND L’UTILISER ?
La méthode includes() est utile quand tu veux vérifier
rapidement la présence d’un élément ou d’un mot sans avoir
besoin de chercher son index.
// 5. CE QU’ELLE NE FAIT PAS
Elle ne donne pas l’index
Elle ne modifie pas le string ou l’array

*/




/*
// ==============================
// MÉTHODE : [findIndex()]
// ==============================
// 1. MA DÉFINITION PERSONNELLE
renvoie l'indice du premier elelement d'un tableau qui satisfait
la fonction de test fournie
si aucune element ne satisfait de test , -1 est renvoye

// 2. PARAMÈTRES ACCEPTÉS
element:L'élément actuellement traité dans le tableau.
index:index d'elelement(optionnel)
array:optionnel

// 3. CE QU’ELLE RETOURNE
index:c'est l'index du premier element qui satisfait la condition
-1: si aucun element ne satisfait  la condition
// 4. QUAND L’UTILISER ?
Trouver le premier nombre pair
Trouver un objet avec une propriété spécifique
// 5. CE QU’ELLE NE FAIT PAS
Ne retourne pas l’élément lui-même (si tu veux l’élément, utiliser find()).
Ne modifie pas l’array, elle est read-only.
Si aucun élément ne match, retourne -1, attention aux erreurs si tu l’utilises directement comme index.
*/



/*
// ==============================
// MÉTHODE : indexOf()
// ==============================
// 1. MA DÉFINITION PERSONNELLE
est une méthode  qui cherche le 
premier index d’un élément précis dans un array ou une string.
si l’élément est trouvé => retourne son index
Sinon => retourne -1

// 2. PARAMÈTRES ACCEPTÉS
str.indexOf(valeurRecherchée);
str.indexOf(valeurRecherchée, indexDébut);

indexDébut:
Paramètre optionnel. L'indice à partir duquel commencer 
la recherche, effectuée du début vers la fin de la liste
valeurRecherchée
Une chaîne représentant la valeur qu'on cherche dans la chaîne courante.

// 3. CE QU’ELLE RETOURNE
Un nombre : l’index du premier élément ou caractère trouvé.
-1 si l’élément ou mot n’existe pas.

// 4. QUAND L’UTILISER ?
Quand tu veux savoir où se trouve un élément précis dans un array ou string.
Pour trouver le premier index d’un élément répété.
Utile pour modifier un élément à un index précis,
vérifier position, ou dans des conditions simples.

// 5. CE QU’ELLE NE FAIT PAS
Ne retourne pas un booléen (pour ça utiliser includes()).
Ne modifie pas l’array ou le string,

*/

/*
// ==============================
// MÉTHODE : [lastIndexOf()]
// ==============================
// 1. MA DÉFINITION PERSONNELLE
La méthode lastIndexOf() renvoie l'indice, dans la chaîne
courante, de la dernière occurence de la valeur donnée en 
argument. Si cette sous-chaîne n'est pas trouvée, la méthode
renvoie -1. La recherche s'effectue de la fin vers le début
de la chaîne, à partir de indiceDébut.

// 2. PARAMÈTRES ACCEPTÉS
str.lastIndexOf(valeurRecherchée)

// 3. CE QU’ELLE RETOURNE
Un nombre : l’index du dernier élément ou caractère trouvé.
-1 si l’élément ou mot n’existe pas.

// 4. QUAND L’UTILISER ?
Quand tu veux savoir où se trouve le dernier élément précis dans un array ou string.
Pour trouver la dernière occurrence d’un élément répété.
Utile pour des vérifications ou remplacements à partir de la fin.

// 5. CE QU’ELLE NE FAIT PAS
Ne retourne pas un booléen (pour ça utiliser includes()).
Ne modifie pas l’array ou le string
*/




// ==============================
// MÉTHODE : some()
// ==============================

// 1. MA DÉFINITION PERSONNELLE
// some() vérifie s’il existe au moins un élément dans un tableau
// qui respecte une condition donnée. Elle s’arrête dès qu’elle le trouve.

// 2. PARAMÈTRES ACCEPTÉS
//element : l’élément courant
// index (optionnel) : l’index de l’élément
// array (optionnel) : le tableau complet

// 3. CE QU’ELLE RETOURNE
// Elle retourne un booléen :
// true : si au moins un élément respecte la condition
//  false : si aucun élément ne la respecte

// 4. QUAND L’UTILISER ?
// - Quand on veut simplement savoir  s’il existe   un élément
// - Pour vérifier la présence d’une valeur spécifique 
// - Pour des validations rapides 


// 5. CE QU’ELLE NE FAIT PAS
// - Elle ne modifie pas le tableau d’origine
// - Elle ne retourne pas les éléments (seulement true ou false)
// - Elle ne parcourt pas tout le tableau si la condition est satisfaite
// - Elle ne remplace pas filter() ou find() si on a besoin des données elles-mêmes











// ==============================
// MÉTHODE : every()
// ==============================

// 1. MA DÉFINITION PERSONNELLE
//La méthode every() des instances de Array retourne false si elle trouve un élément du tableau qui ne satisfait pas
//la fonction de test fournie. Sinon, elle retourne true.

// 2. PARAMÈTRES ACCEPTÉS
//    element : l’élément courant
//    index (optionnel) : l’index de l’élément
//    array (optionnel) : le tableau complet

// 3. CE QU’ELLE RETOURNE
// Elle retourne un booléen :
// - true : si tous les éléments respectent la condition
// - false : si au moins un élément ne la respecte pas

// 4. QUAND L’UTILISER ?
// - Quand on veut vérifier une règle générale sur tout le tableau
// - Pour des validations globales 
// - Pour vérifier si toutes les valeurs sont valides 


// 5. CE QU’ELLE NE FAIT PAS
// - Elle ne modifie pas le tableau d’origine
// - Elle ne retourne pas les éléments (seulement true ou false)
// - Elle ne parcourt pas tout le tableau si la condition échoue
// - Elle ne remplace pas filter() ou map() si on a besoin des données transformées


// ==============================
// MÉTHODE : push()
// ==============================
// 1. MA DÉFINITION PERSONNELLE
//ajoute les éléments définis à la fin d'un tableau et 
// retourne la nouvelle longueur du tableau

// 2. PARAMÈTRES ACCEPTÉS
// push()
// //push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)
//Les éléments à ajouter à la fin du tableau.

// 3. CE QU’ELLE RETOURNE
// La nouvelle longueur du tableau.
// 4. QUAND L’UTILISER ?
// Quand on veut ajouter un ou plusieurs éléments à la fin d'un tableau.
// 5. CE QU’ELLE NE FAIT PAS
// Elle ne crée pas un nouveau tableau,
//  elle modifie le tableau original.



// ==============================
// MÉTHODE : pop()
// ==============================
// 1. MA DÉFINITION PERSONNELLE
// supprime le dernier élément d'un tableau et retourne cet 
// élément. Cette méthode modifie la longueur du tableau.

// 2.PARAMÈTRES ACCEPTÉS
//pop()
// Aucun paramètre
// 3. CE QU’ELLE RETOURNE
//L'élément retiré du tableau ; 
//undefined si le tableau est vide.

// 4. QUAND L’UTILISER ?
// Pour retirer le dernier élément d'un tableau.
// 5. CE QU’ELLE NE FAIT PAS
// Elle ne crée pas un nouveau tableau.


// ==============================
// MÉTHODE : unshift()
// ==============================
// 1. MA DÉFINITION PERSONNELLE
// unshift() ajoute un ou plusieurs éléments au début d'un tableau.
// 2. PARAMÈTRES ACCEPTÉS
// Les éléments à ajouter.
// 3. CE QU’ELLE RETOURNE
// La nouvelle longueur du tableau.
// 4. QUAND L’UTILISER ?
// Quand on veut ajouter un ou plusieurs éléments au début.
// 5. CE QU’ELLE NE FAIT PAS
// Elle ne crée pas un nouveau tableau.







// ==============================
// MÉTHODE : shift()
// ==============================
// 1.MA DÉFINITION PERSONNELLE
//supprime le premier élément d'un tableau et retourne cet
// élément supprimé. Cette méthode modifie la longueur du tableau.
// 2. PARAMÈTRES ACCEPTÉS
//shift()
// Aucun paramètre.
// 3. CE QU’ELLE RETOURNE
//L'élément retiré du tableau ou
// undefined si le tableau est vide
// 4. QUAND L’UTILISER ?
// Pour retirer le premier élément d'un tableau.
// 5. CE QU’ELLE NE FAIT PAS
// Elle ne crée pas un nouveau tableau.




// ==============================
// MÉTHODE : sort()
// ==============================
// 1. MA DÉFINITION PERSONNELLE

//La méthode sort(): des instances de Array trie les éléments
// d'un tableau 

// 2. PARAMÈTRES ACCEPTÉS
//sort()->ayya des chainea
// callback (a, b) => number (optionnel)

// 3. CE QU’ELLE RETOURNE
// Le tableau trié (modifié directement).
// 4. QUAND L’UTILISER ?
// Pour trier des nombres ou des chaînes dans un tableau.
// 5. CE QU’ELLE NE FAIT PAS
// Elle ne crée pas un nouveau tableau.



// ==============================
// MÉTHODE : forEach()
// ==============================
// 1. MA DÉFINITION PERSONNELLE
//La méthode forEach() des instances de Array exécute une 
//fonction fournie une fois pour chaque élément du tableau.

// 2. PARAMÈTRES ACCEPTÉS
// callback(element, index, array)

// 3. CE QU’ELLE RETOURNE
// Aucune
// 4. QUAND L’UTILISER ?
// Pour exécuter une action sur chaque élément sans créer un nouveau tableau.
// 5. CE QU’ELLE NE FAIT PAS
// Elle ne crée pas un nouveau tableau et ne retourne pas de valeur.



