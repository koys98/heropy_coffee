const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function(){
  searchInputEL.focus();
});

searchInputEL.addEventListener('focus', function(){
  searchEL.classList.add('focused');
  searchInputEL.setAttribute('placeholder', '통합검색');
});

searchInputEL.addEventListener('blur', function(){
  searchEL.classList.remove('focused');
  searchInputEL.setAttribute('placeholder', '');
});

const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    });
  }else{
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    });
  }
});

const fadeELs = document.querySelectorAll('.visual .fade-in');

fadeELs.forEach(function(fadeEL, index){
  gsap.to(fadeEL, 1, {
    delay: (index+1) * .7,
    opacity: 1
  });
});
new Swiper('.notice .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true
});
