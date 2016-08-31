
// ----- script navbar ----- //
var header = document.querySelector('header');
var headerContent = document.getElementById('header');
var firstArticle = document.querySelectorAll('article')[0];

var scrollY = function() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};
var onScroll = function() {
    if (scrollY() > 40) {
        header.style.position = "fixed";
        header.style.height = "15%";
        headerContent.style.height = "10%";
        firstArticle.style.marginTop = "220px";

    } else {
        header.style.position = "relative";
        header.style.height = "110px";
        headerContent.style.height = "110px";
        firstArticle.style.marginTop = "0px";
    }
};
window.addEventListener('scroll', onScroll);
