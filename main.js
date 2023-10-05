/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');


//    menu show    //
//   variable if  constant exists   // 
if(navToggle){
    navToggle.addEventListener('click',function(){
        navMenu.classList.add('show-menu');
    });
}

///   menu header   /// 
//    variable  if constant exista  //
if(navClose){
    navClose.addEventListener('click',function(){
        navMenu.classList.remove('show-menu')
    });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');
const linkAction = function (){
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav__link , we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(function(n){
    n.addEventListener('click',linkAction)
});


/*=============== SHADOW HEADER ===============*/
const shadowHeader = ()=> {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport  height , add the 
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
    :header.classList.remove('shadow-header')  ;
}
window.addEventListener('click',shadowHeader);

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact__message');
const sendEmail = function(e){
    e.preventDefault();

    //serviceID  - templateID  -  #form - publickey
    emailjs.sendForm('service_2p365zk','template_p6ip9sv','#contact-form','2babczeD-vgWrcSkj').then(()=> {
        // show sent message 
        contactMessage.textContent = 'message sent successfully ✅';

        // remove message after five second 
        setTimeout(()=>{
            contactMessage.textContent = '';
        },5000);
        //clear input filed 
        contactForm.reset();
    },()=> {

        // show error message 
        contactMessage.textContent = ' Message not sent (service error) ❎✖';
    });
}
contactForm.addEventListener('submit',sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.querySelector('.scrollup');
    // when the scroll is higher than 600 viewport height , add the display  
    window.scrollY >= 600 ? scrollUp.style.display = 'block' :scrollUp.style.display = 'none';
}

window.addEventListener('scroll' , scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
//console.log(sections)

// const scrollActive = () =>{
//     const scrollDown = window.scrollY;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;  
//         const sectionTop = current.offsetTop - 58;
//         const sectionId = current.getAttribute('id');
//         const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        
//         confirm.localStorage(sectionClass)


//         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//             sectionClass.classList.add('active-link');
//         }else{
//             sectionClass.classList.remove('active-link');
//         }
//     });
// }

// window.addEventListener('scroll',scrollActive);


/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// previous selected topic (if user selected )
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has vaildating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line'  : 'ri-sun-line';

//  we validated if the user previously chose a topic
if(selectedTheme){
    // we validate if the user is fullied , we ask the issuse was to know if we activated or 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](iconTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

}

//  Activate   /deactivate the theme manually with the button 
themeButton.addEventListener('click',()=> {
    // Add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme' , getCurrentTheme());
    localStorage.setItem('selected-theme' , getCurrentIcon()); 

});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500 , 
    delay: 400,
    // reset: true // Animation repeasted 
});

// sr.reveal(`.home__perfil`, {origin: 'right'});
// sr.reveal(`.home__name , .home__info`, {origin : 'left'});


sr.reveal(`.home__perfil , .about__image , contact__email`,{origin: 'right'})
sr.reveal(`.home__name , .home__info  , .about__container , .section__title-1 , .about-info ,
.contact__social , .contact__data
` ,{origin: 'left'})

sr.reveal(`.services__card , .projects__card`,{interval: 100})


//  date of website

let date = document.querySelector('.date');

date.textContent = new Date().getFullYear();




