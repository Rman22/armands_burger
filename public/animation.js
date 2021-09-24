anime({
        targets: '.homeImage',
        translateX: 500,
        direction: 'reverse',
        easing: 'linear',
        duration: 1400,

    
      });
window.sr = ScrollReveal();
    sr.reveal('.aboutBurger',{
    duration: 1000,
    reset: true,
    delay: 500,
    origin: 'top',
    easing: 'ease-in',
    distance: '250px',
    opacity: 0

});  
    sr.reveal('.leftAbout',{
    duration: 1000,
    reset: true,
    delay: 500,
    origin: 'left',
    easing: 'ease-out',
    distance: '250px',
    opacity: 0

});    
sr.reveal('.rightAbout',{
    duration: 1000,
    reset: true,
    delay: 500,
    origin: 'right',
    easing: 'ease-out',
    distance: '250px',
    opacity: 0

}); 
anime({
        targets: '.rating1',
        width: '0', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      });

// window.onscroll = function(e){
//     animation.seek(window.pageYOffset * 1.80)
// }