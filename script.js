
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
        header.style.height = "70px";
        headerContent.style.height = "70px";

    } else {
      image.style.marginTop = "0";
        header.style.position = "relative";
        header.style.height = "110px";
        headerContent.style.height = "110px";
    }
};
window.addEventListener('scroll', onScroll);
onScroll();
