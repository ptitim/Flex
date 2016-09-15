// Chaque fonction sera pour un exemple, exepter le FlexDir qui s'apliquera sur l'id envoyer en parametre
function flexDir(id, id2){
    var ele = document.getElementById(id);//recuperation de l'element a changez d'attribut css
    var afgAttribut = document.getElementById(id2);//element html pour afficher l'etat de l'attribut css
    var flexDirTab = ["row", "row-reverse"/*, "column", "column-reverse"*/];//attribut du style flex
    var styleAct = ele.style.flexDirection;//recuperation du style actuel

    var index = flexDirTab.indexOf(styleAct);
    index++;
    index >= flexDirTab.length ? index = 0 : index = index;//condition pour ne pas depacer du tableau
    ele.style.flexDirection = flexDirTab[index];
    afgAttribut.innerText  = flexDirTab[index]+";";
};

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
    texte.innerText = wrapAtr[index] + ";";//affichage (textuel) du nouveaux style
};

function justify(){
  var ele = document.getElementById('exempleJustify');
  var texte = document.getElementById('justify');//element htmln affichent l'attribut actuel
  var alignAttr = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];//attribut du style flew-wrap
  var actu = ele.style.justifyContent;//style actuel

  if(actu == ""){
      ele.style.justifyContent = alignAttr[0];
  }

  var index = alignAttr.indexOf(actu);//index (pour le tableau d'attribut)
  index++;
  index >= alignAttr.length ? index = 0 : index = index;//remise a 0 de 'l'index si il dépasse du tableau
  ele.style.justifyContent = alignAttr[index];//application du nouveaux style
  texte.innerText = alignAttr[index] + ";";//affichage (textuel) du nouveaux style
  return alignAttr[index];
};


function alignement(){
    var ele = document.getElementById('exempleAlign');
    var texte = document.getElementById('align');
    var alignAttr = ["flex-start","flex-end","center","baseline","stretch"];
    var actu = ele.style.alignItems;

    if(actu == ""){
        ele.style.alignItems = alignAttr[0];
    }
    var index = alignAttr.indexOf(actu);
    index++;
    index >= alignAttr.length ? index = 0 : indedx = index;
    ele.style.alignItems = alignAttr[index];
    texte.innerText = alignAttr[index] + ";";
    return alignAttr[index];
};


function ordre(){
    var elements = [];
    elements.push(gid('un'),gid('deux'),gid('trois'),gid('quatre'),gid('cinq'));
    var textes = [];
    textes.push(gid('order1'),gid('order2'),gid('order3'),gid('order4'),gid('order5'));
    var actu = elements[0].order;
    console.log(elements);
    console.log(textes);

    if(actu == 1){
         elements[0].style.order = "3"; textes[0].innerText = "3";
         elements[1].style.order = "5"; textes[1].innerText = "5";
         elements[2].style.order = "4"; textes[2].innerText = "4";
         elements[3].style.order = "2"; textes[3].innerText = "2";
         elements[4].style.order = "1"; textes[4].innerText = "1";
         console.log("bonjour");
    }else{
        for (var i = 0; i < elements.length; i++) {
          elements[i].order = (i+1).toString();
          textes[i].innerText = i+1;
        }
        console.log("aurevoir");
    }
};

function gid(id){
    return document.getElementById(id);
};

function init(){
  flexDir('exempleDistrib','flexDir1');
  wraper();
  justify();
  alignement();
}
