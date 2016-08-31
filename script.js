function menudisplay(){

    var a = document.getElementsByClassName('param');
    a[0].style.animationName="slide-left";
    setTimeout(function(){document.addEventListener("click",hidemenu)},10);
    setTimeout(function(){a[0].style.width = "80vw";},10);

};

function hidemenu(){
    var a = document.getElementsByClassName('param');
    a[0].style.animationName= "";
    a[0].style.width = "0vw";
};

document.addEventListener("scroll",truc);

function truc(event){
    // console.log(event);
    var e = document.getElementById('test');
    if(event.pageY >= 68){
        e.style.position = "fixed";
        e.style.top = "0";
    }else{
        e.style.position = "relative";
    }
};
