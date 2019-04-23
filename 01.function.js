//Afficher Node = CTRL + ALT + N
console.log("01 - Fonctions");

var nombre1= 10;
var nombre2 = 20;

function addition (nb1, nb2){
return nb1 + nb2
};

var resultat1 = addition(nombre1, nombre2);

console.log("resultat1 =", resultat1);

function afficher (texte) {
    console.log(texte);
  };

function somme(petitPois, haricotVert) {
    return petitPois+haricotVert;
     };
  
resultat2 = somme(nombre1, nombre2);

console.log("resultat2 =",resultat2);

function multiplication(nb1, nb2){
    return nb1*nb2
};

resultat3 = multiplication(nombre1, nombre2);
console.log("resulat3 =", resultat3);

function afficherOperation(nomOperation, operation, nb1, nb2){
    this.nomOperation = nomOperation;
    this.operation = operation (nb1, nb2);
    this.nb1 = nb1;
    this.nb2 = nb2;
    this.full= function(){
        return this.nomOperation + "(" + this.nb1 + "," + this.nb2 + ") = " + this.operation;
    }
}
var sm = new afficherOperation('Somme', somme, 20, 40);
console.log (sm.full ());

var multi = new afficherOperation('Multiplication', multiplication, 10, 20);
console.log (multi.full ());

function Soustraction (nb1, nb2){
    return nb1-nb2;
}

var sous = new afficherOperation('Soustraction', function (nb1, nb2){
    return nb1-nb2;
}, 15, 5);
console.log (sous.full ());