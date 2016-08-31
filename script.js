
// ----- script navbar ----- //
var header = document.querySelector('header');
var headerContent = document.getElementById('header');
var image = document.getElementById('img');
// var firstArticle = document.querySelectorAll('article')[0];

var scrollY = function() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};

var onScroll = function() {
    if (scrollY() > 40) {
        img.style.marginTop = "15vh";
        header.style.position = "fixed";
        header.style.height = "11vh";
        headerContent.style.height = "10vh";
        // firstArticle.style.marginTop = "220px";

    } else {
        header.style.position = "relative";
        header.style.height = "110px";
        headerContent.style.height = "110px";
        // firstArticle.style.marginTop = "0px";
    }
};
window.addEventListener('scroll', onScroll);
