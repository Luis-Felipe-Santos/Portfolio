let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.navbar-nav .nav-item a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('.navbar-nav .nav-item a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}   