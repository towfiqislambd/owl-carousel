$(document).ready(function(){
  new WOW().init();
  $(".owl-carousel").owlCarousel({
    items:3,
    margin:15,
    autoplay:true,
    autoplayHoverPause:true,
    responsive: {
      0 : {
        items:1
      },
      768 : {
        items:2
      },
      998 : {
        items:3
      }
    }
  })
})
