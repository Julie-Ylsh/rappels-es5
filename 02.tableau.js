afficher = console.log;

villes = ["Nantes", "Paris", "Saint-Nazaire", "angers", "Le Mans"];

villes.forEach(function (el) {
    afficher(el);
  });

  var resultat = villes.every(function (v) {
    return v.includes('a');
  });

  afficher(resultat);

  var auMoinsUneVilleAvecUnTiret = villes.some(function (v) {
    return v.includes('-');
  });

  afficher(auMoinsUneVilleAvecUnTiret);

  var villesSansTiretSansEspace = villes.filter(function (v) {
    return !v.includes('-') && !v.includes(' ');
  });

  afficher(villesSansTiretSansEspace);

  var villesMajusculeSeTerminantParS = villes.filter(function (v) {
    return v.endsWith("s");
  }).map(function (el) {
    return el.toUpperCase();
  });

  afficher(villesMajusculeSeTerminantParS);