const nav_menu = document.querySelector('#nav_menu');
const nav_toggle = document.querySelector('#nav_toggle');
const nav_close = document.querySelector('#nav_close');


if(nav_toggle){
  nav_toggle.addEventListener('click' , () => {
    nav_menu.classList.add('show_menu');
  })
}

if(nav_close){
  nav_close.addEventListener('click' , () => {
    nav_menu.classList.remove('show_menu');
  })
}


const nav_link = document.querySelectorAll('.nav_link');

nav_link.forEach(val => {
  val.addEventListener('click' , () => {
    nav_menu.classList.remove('show_menu');
  })
})

 
function scrollHeader(){
  const header = document.querySelector('#header');

  if(pageYOffset >= 50){
    header.classList.add('scroll-header')
  }
  else{
    header.classList.remove('scroll-header')
  }

}

window.addEventListener('scroll' , scrollHeader)


function scrollUp(){
  const scrollUp = document.querySelector('.scrollUp');

  if(pageYOffset >= 200){
    scrollUp.classList.add('show-scroll')
  }else{
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll' , scrollUp);

const sections = document.querySelectorAll('section[id]');

function scrollLinks(){ 
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*= ' + sectionId + ']').classList.add('active-link');
    }
    else{
      document.querySelector('.nav_menu a[href*= ' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll' , scrollLinks)