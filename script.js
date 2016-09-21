
// ----- script navbar ----- //
var header = document.querySelector('header');
var headerContent = document.getElementById('header');
var image = document.getElementById('img');

var scrollY = function() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};

var onScroll = function() {
    if (scrollY() > 40) {
        image.style.marginTop = "110px";
        header.style.position = "fixed";
        header.style.height = "80px";
        headerContent.style.height = "80px";

    } else {
        image.style.marginTop = "0";
        header.style.position = "relative";
        header.style.height = "100px";
        headerContent.style.height = "100px";
    }
};
window.addEventListener('scroll', onScroll);
onScroll();
