function autoScroll(anchor){
    var element = document.getElementById(anchor);
    var scrol = element.offsetTop - 100;
    TweenMax.to(window ,1 ,{scrollTo: scrol, ease:Bounce.easeOut});
}
