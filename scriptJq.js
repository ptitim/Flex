$(document).ready(function(){
    var hashp = 0;
    $("a").on('click',function(){
        if(this.hash !== ""){
          // event.preventDefault();
          var hash = this.hash;

          console.log(hash, hashp);
          if(hashp == 0){
            var hauteurActu = 0;
          }else {
            var hauteurActu = $(hashp).offset().top;
          }
          var hauteurScroll = $(hash).offset().top;
          console.log(hauteurActu,", ",hauteurScroll);
          if(hauteurActu < hauteurScroll){

              $('html, body').animate({
                  scrollTop: ($(hash).offset().top)+25
              },"slow");
          }else{

              $('html, body').animate({
                  scrollTop: ($(hash).offset().top)-125
            },"slow");
          };
          $('html, body').animate({
              scrollTop: ($(hash).offset().top)-100
          },'slow',function(){
            // window.location.hash = hash;
            hashp = hash;
          })
        }
    });
});
