var swiper = new Swiper('.mySwiper-1', {
    // Optional parameters
    slidesPerView:1,
    spaceBetween:30,
    direction: 'horizontal',
    loop: true,
    effect:"coverflow",
    autoplay:{
        delay:2500,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


var swiper = new Swiper('.mySwiper-2', {
    slidesPerView:3,
    spaceBetween:20,
    direction:'horizontal',
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
          slidesPerView:1,
        },
        520: {
          slidesPerView:2,
        },
        950: {
          slidesPerView:3,
        },
    } 
});

let tabInputs = document.querySelectorAll('.tabInput');

tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});




