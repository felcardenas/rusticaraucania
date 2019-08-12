// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
    
         
//      anchor.addEventListener('click', function (e) {
//          e.preventDefault();

//          document.querySelector(this.getAttribute('href')).scrollIntoView({
//              behavior: 'smooth',
//              duration: 5000
            
//          });

         

         
//      });

//  });


$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});