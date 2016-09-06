// Chaque fonction sera pour un exemple, exepter le FlexDir qui s'apliquera sur l'id envoyer en parametre
function flexDir(id, id2){
    var ele = document.getElementById(id);//recuperation de l'element a changez d'attribut css
    var afgAttribut = document.getElementById(id2);//element html pour afficher l'etat de l'attribut css
    var flexDirTab = ["row", "row-reverse", "column", "column-reverse"];//attribut du style flex
    var styleAct = ele.style.flexDirection;//recuperation du style actuel

    var index = flexDirTab.indexOf(styleAct);
    index++;
    index >= flexDirTab.length ? index = 0 : index = index;//condition pour ne pas depacer du tableau
    ele.style.flexDirection = flexDirTab[index];
    afgAttribut.innerText  = flexDirTab[index];
}

function wraper(){
    var ele = document.getElementById('exempleDistrib');
    var texte = document.getElementById('wrap');//element htmln affichent l'attribut actuel
    var wrapAtr = ['wrap', 'wrap-reverse', 'nowrap'];//attribut du style flew-wrap
    var actu = ele.style.flexWrap;//style actuel

    if(actu == ""){
        ele.style.flexWrap = "wrap";
    }
    var index = wrapAtr.indexOf(actu);//index (pour le tableau d'attribut)
    index++;
    index >= wrapAtr.length ? index = 0 : index = index;//remise a 0 de 'l'index si il dépasse du tableau
    ele.style.flexWrap = wrapAtr[index];//application du nouveaux style
    texte.innerText = wrapAtr[index];//affichage (textuel) du nouveaux style
}

function bonjour(){
  var ele = document.getElementById('exempleAlign');
  var texte = document.getElementById('align');//element htmln affichent l'attribut actuel
  var alignAttr = ['flex-start', 'flex-end', 'center', 'space-between'];//attribut du style flew-wrap
  var actu = ele.style.justifyContent;//style actuel

  if(actu == ""){
      ele.style.justifyContent = "flex-start";
  }
  console.log(actu);
  // TODO: corriger le bug renvoie index == -1
  var index = alignAttr.indexOf(actu);//index (pour le tableau d'attribut)
  console.log(index);
  index++;
  console.log(index);
  index >= alignAttr.length ? index = 0 : index = index;//remise a 0 de 'l'index si il dépasse du tableau
  ele.style.justifyContent = alignAttr[index];//application du nouveaux style
  texte.innerText = alignAttr[index];//affichage (textuel) du nouveaux style
}

function init(){
  flexDir('exempleDistrib','flexDir1');
  wraper();
  bonjour();
}
