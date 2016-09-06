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
    var texte = document.getElementById('wrap');
    var wrapAtr = ['wrap', 'wrap-reverse', 'nowrap'];
    var actu = ele.style.flexWrap;

    if(actu == ""){
        ele.style.flexWrap = "wrap";
    }
    var truc = wrapAtr.indexOf(actu);//index
    truc++;
    truc >= wrapAtr.length ? truc = 0 : truc = truc;
    ele.style.flexWrap = wrapAtr[truc];
    texte.innerText = wrapAtr[truc];
}
function init(){
  flexDir('exempleDistrib','flexDir1');
  wraper();
}
