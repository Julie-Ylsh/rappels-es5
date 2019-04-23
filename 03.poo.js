afficher = console.log;

function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom=prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function  (){
        return this.nom + " " + this.prenom + ", " + this.pseudo;
    }
}

var jules = new Personne ("Jules", "LEMAIRE", "jules77");
var paul = new Personne ("Paul", "LEMAIRE", "paul77");

afficher(jules.nom);
afficher(jules.prenom);
afficher(jules.pseudo);
afficher(jules.getNomComplet());

function afficherPersonne (Personne){
   return afficher(Personne.nom) + afficher(Personne.prenom) + afficher(Personne.pseudo) + afficher(Personne.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = "jules44";
afficher(jules.getNomComplet());

afficher(jules.age);

Personne.prototype.age="Non renseigné";

afficher(jules.age);
jules.age="30";
afficher(jules.age);

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
}

afficher(jules.getInitiales());

var robert = {
    nom : 'Robert',
    prenom :  'LEPREFET',
    pseudo :  'robert77',
    getNomComplet : function() {
        return this.nom + " " + this.prenom + ", pseudo : " + this.pseudo
    }
}

afficherPersonne(robert);

function Client (nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return this.numeroClient + " " + this.nom + " " + this.prenom;
    }
}

var Steve = new Client ("LUCAS", "Steve", "Steve44", "A01");
afficherPersonne(Steve);
afficher(Steve.numeroClient);
afficher(Steve.getInfos());

