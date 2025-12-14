/***************************/
//Pour filter();
/***************************/

 let  data=[
{name:"Pablo" ,age:31},
{name:"Maria" , age:28},
{name :"Ana" ,age:25},
{name: "Juan" ,age:40},
];

// SUR UN TABLEAU
const nouveTab=data.filter(function(ex){
      return ex.age==31;
}); 
 console.log(nouveTab);


//SUR UNE STRING
const text="Bonjour khadija";
const  petitMots=text.split(" ").filter(function(ex) {
       return   ex.length >5;
});

console.log(petitMots);

// SUR UN OBJET
console.log(" filter hhhhhhhhhh");

let people=Object.entries(data).filter(function ([cle,valeur]) {
                return valeur.name=="Juan";
});
 console.log(people);
  //or 
let pepp=data.filter(function(ex){
         return ex.name=="Juan";
})
   console.log(pepp);


/***************************/
//Pour map();
/***************************/

 //SUR UN ARAAY


let myNums=[1,2,3,4,5,6];
let addself= myNums.map(function(el){
       return  el+el;
});

let swappingcases="elZERO";
let invertedNumbers=[1,-10,-20,15,100,-30];
let ignoreBooleans="Elz123er4o";
//SUR UN STRING
let sw= swappingcases.split("").map(function(el){
  return el==el.toUpperCase()?
    el.toLowerCase():el.toUpperCase();
  
}).join("");
       console.log(sw);

//SUR UN OBJECT

let peoplel=Object.entries(data).map(function([cle,valeur]){
                    return valeur.name;
});       
 console.log(peoplel);

/***************************/
//Pour reduce();
/***************************/
//sur ARRAY
  console.log("reduce");
let nums=[8,1,1,1];
let addc=nums.reduce(function(acc,current,index,arr){
    
    return acc+current;
  
},2);

console.log(addc);

//SUR STRING

let phrase="je suis developpeur web";
let nbrcaracter=phrase.split('').reduce(function(acc,char){
       if( char==='e')
               return  acc+1;
       return  acc;
},0);
    console.log(nbrcaracter);

//SUR object
let  config = { theme: "dark", lang: "fr", notifications: true, debug: false };
let configActive=Object.entries(config)
.reduce((acc,[cle,valeur])=>{
        if(valeur=="dark")
              acc[cle]=valeur;
     return acc;
},{});
    console.log(configActive);
//   Pour find()
  //sur array
let etudiants = [
  { nom: "Alice", note: 15, present: true },
  { nom: "Bob", note: 8, present: false },
  { nom: "Charlie", note: 18, present: true }
];
let premierEtudinat=etudiants.find(function(ex){
        return ex.present;
});
  console.log(premierEtudinat);
  
   //sur string
const phrasee = "Je suis développeur web";
const premierMotLong = phrasee.split(' ').find(function(mot){
              return mot.length > 3;
})  ;
         console.log(premierMotLong);
      //sur object
let  configg = { theme: "dark", lang: "fr", notifications: true, debug: false };

let resultat=Object.entries(configg)
    .find(([cle,valeur])=>
        valeur==true);
console.log(resultat);
  //POUR INCLUDE()
//sur array
let fruits = ["pomme", "banane", "orange"];
let res=fruits.includes("banane");
console.log(res);
//sur string
let phr = "Je suis développeur web";

console.log(phr.includes("développeur"));
console.log(phr.includes("sui")); 
//sur object
let conf = { theme: "dark", lang: "fr", notifications: true };
let keys=Object.keys(conf).includes("theme");
console.log(keys);
let valeur=Object.values(conf).includes("dark");
console.log(valeur);

   //POUR findIndex();

const numbers=[4,9,12,15.7];
const index=numbers.findIndex(function(ex){
        return ex>10;
})
console.log(index);
  //POUR STRING
const ch="je suis khadija";
const indestr=ch.split('').findIndex(function(ex){
        return ex === 'a';
});
 console.log(indestr);
 //POUR object
const obj={them:"dark",lang:"fr",notifications:true};
const indextr=Object.entries(obj).findIndex(function([cle,valeur]){
       return valeur==true;
});
  console.log(indextr);

//Pour  indexOf()
  //SUR UN ARRAY
  console.log("indice");
const tab=["informatique","pc","maths"];
let indice1=tab.indexOf("maths");
 console.log(indice1);
 //SUR UN STRING
 const str="hello world";
 let indice2=str.indexOf("w");
 console.log(indice2);//res indice=6

    //POUR lastIndexOf()
console.log("LASTINDEXOF");
const tab2=["informatique","pc","maths","pc"];
let indice3=tab2.lastIndexOf("pc");

 console.log(indice3);

 //SUR UN STRING

 const str2="world hello world";
 let indice4=str2.lastIndexOf("world");

 console.log(indice4);//res indice=6

  //sur objetc
  const user1 = { name: "Ali" };
const user2 = { name: "Juan" };
const user3 = user1; 

const users = [user1, user2, user3];

console.log(users.lastIndexOf(user1)); 

//POUR some()
  //sur array
let tab3=[1,3,89,3,4];
let verifier=tab3.some(function(ex){
        return ex===89;
});
console.log(verifier);
//sur string
let str3="je suis khadija";
let verifier1=str3.split('').some(function(ex){
        return ex==="i";
})
console.log(verifier1);
 //sur object
  const user4 = { name: "Ali",ville:"safi"};
  let verifuser=Object.keys(user4).some(function(cle){
      return cle==="name";
  })
  console.log(verifuser)

  //POUR every()
  //sur array
const note=[12,1,14];
let verifier2=note.every(function(n){
        return n>=10;
});
console.log(verifier2);

// sur string
console.log("sur string");
const srtev="je jc je";
const mot=srtev.split(' ');
let verstr=mot.every(function(ex){
    return ex==="je";
});
console.log(verstr);
// sur objet
console.log("obj");
let data1 = [
  { name: "Ana", age: 31 },
  { name: "Ana", age: 28 },
  { name: "Ana", age: 25 },
  { name: "Ana", age: 40 }
];

let datres=data1.every(function(ex){
       return ex.name==="Ana";
});
console.log(datres);


//POUR  push()
console.log("POur push");
  //sur array
let fruits1=["pomme","bannae"];
fruits1.push("orange");
console.log(fruits1);

  //sur string
let text1="Bobjour khadija";
let mot1=text1.split(' ');
mot1.push("sara");
console.log(mot1);

//sur un objet
let user = { name: "Ana", age: 31 };
let entre=Object.entries(user);
entre.push(["city","safi"]);
let newobj=Object.fromEntries(entre);
console.log(newobj);

   //Pour  pop()
   console.log("pop");
 //sur array
  fruits1=["pomme","bannae","kiwi"];
  let ppr=fruits1.pop();
  console.log(ppr);

  //sur string
 text1="Bobjour khadija sara";
 mot1=text1.split(' ');
 mot1.pop();
 console.log(mot1);

//sur un objet
 user = { name: "Ana", age: 31 };
 entre=Object.entries(user);
 entre.pop();
 newobj=Object.fromEntries(entre);
 console.log(newobj);

  //POUR  shift()
  console.log("pour shit");
  //sur array
let user6=[12,2,3,4,5];
let res2=user6.shift();
console.log(res2);
  //sur string
let str4="je suis khadija";
let res3=str4.split(' ');
res3.shift();
console.log(res3);
   //sur object
 user = { name: "Ana", age: 40 };
  entre=Object.entries(user);
 entre.shift();
 newobj=Object.fromEntries(entre);
 console.log(newobj);
   //Pour unshift()
   console.log("unshift");
    //sur array
 fruits1=["pomme","bannae"];
fruits1.unshift("kiwi");
console.log(fruits1);

  //sur string
 text1="Bonbjour khadija";
 mot1=text1.split(' ');
mot1.unshift("hoda");
console.log(mot1);

//sur un objet
 user = { name: "Ana", age: 31 };
 entre=Object.entries(user);
entre.unshift(["city","safi"]);
 newobj=Object.fromEntries(entre);
console.log(newobj);
   console.log("sort");
   //Pour  sort
   console.log("sort");
   //sur  array de strings
 fruits = ["d", "a", "C"];
fruits.sort();
console.log(fruits);

   //SUR ARRAY DES NUMBERS
 let numbersv = [10, 2, 30, 5];
 numbersv.sort(function(a,b){
       return a-b;
 });
  console.log(numbersv);
  //SUR AOBJECT
 let users2 = [
  { name: "Ana", age: 31 },
  { name: "Maria", age: 25 },
  { name: "Juan", age: 40 }
];
users2.sort((a, b) => a.age - b.age); 
console.log(users2);
  // sur string
let text2="je suis khadija sara";
let words=text2.split(" ");
words.sort();
let sortt=words.join(" ");
console.log(sortt);
  //Pour  foreach
let ville=["safi","casa","agadir"];
let resv=ville.forEach(function(ex){
         return ex==="casa";
})
console.log(resv);
   //sur string
   let text3= "bonjour";
text3.split("").forEach(function(letter) {
  console.log(letter);
});
//sur object
let entries = Object.entries(obj);
entries.forEach(([key, value]) => {
  console.log(key, value);
});



