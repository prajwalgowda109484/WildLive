// var btn = document.getElementsByClassName("btn");
// var slide = document.getElementById("slide");

// btn[0].onclick = function(){
//     slide.style.transform ="translateX(0px)";
//     for(i=0; i<4; i++){
//         btn[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btn[1].onclick = function(){
//     slide.style.transform ="translateX(-800px)";
//     for(i=0; i<4; i++){
//         btn[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btn[2].onclick = function(){
//     slide.style.transform ="translateX(-1600px)";
//     for(i=0; i<4; i++){
//         btn[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btn[3].onclick = function(){
//     slide.style.transform ="translateX(-2400px)";
//     for(i=0; i<4; i++){
//         btn[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }

// function showMenu(){
//     navLinks.style.right='0';
// }

// const formOpenBtn= document.querySelector("#form-open"),
// log= document.querySelector(".log"),
// formlog= document.querySelector(".form__log"),
// formclose= document.querySelector(".form__close"),
// signupBtn= document.querySelector("#signup"),
// loginBtn=document.querySelector("#login"),
// pwShowHide=document.querySelectorAll("#.pw_hide");


// formOpenBtn.addEventListener("click", () => home.classList.add("show"))
// formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

// <script src="scrollreveal.min.js"></script>

{/* <script>
    //  const sr = ScrollReveal({
    // origin:'top',
    // distance:'60px',
    // duration: 3000,
    // delay: 400,
  //  reset: true // ani repeat

// })

//  sr.reveal('.home__data, .footer__container  ')

// sr.reveal('.home__card  ', {delay: 600, distance: '100px', interval: 100})
// sr.reveal('.about__data ', {origin: 'right'})
// sr.reveal('.about__image , .join__data, .form__log, line, .about-us', {origin: 'left'})
// sr.reveal('.popular__card', {interval: 200})

// </script> */}

<!-- --------------------------PLACE TO STORE EMAIL----------------------------------------- -->
<script>

    var btn =document.getElementById('btn');
    btn.addEventListener('click', function(e){
        e.preventDefault()
        var email = document.getElementById('email').value;
        console.log('hi');
        
        // SecureToken:  "654046a7-16dc-4f48-b3c8-eff1e7784e21",
        Email.send({
    Host : "smtp.elasticemail.com",
    Username : "techbae54@gmail.com",
    Password : "6F24D4A42880B13D85C29785A749415B5698",
    To : 'techbae54@gmail.com',
    From :  "techbae54@gmail.com",
    Subject : "New subscriber",
    Body : "Email: " +document.getElementById("email").value
}).then(
  message => alert(message)
);
    })
   
    
</script>
</body>

<!-- -------------------SCROLL REVEAL--------------- -->

<script src="scrollreveal.min.js"></script>











    <script>
        /*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollY = window.pageYOffset

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// 		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)


// -----------------------------SCROLL REVEAL ANI---------------------------
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 3000,
    delay: 400,
  //  reset: true // ani repeat

})

sr.reveal('.home__data, .footer__container, .log')

sr.reveal('.home__card', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.about__data', {origin: 'right'})
sr.reveal('.about__image , .join__data', {origin: 'left'})
sr.reveal('.popular__card', {interval: 200})



// ----------------------------LOGIN SIGNUP--------------------------

// const formOpenBtn= document.querySelector("#form-open"),
// log= document.querySelector("#log"),
// formLog= document.querySelector(".form__log"),
// formCloseBtn= document.querySelector(".form__close"),
// signupBtn= document.querySelector("#signup"),
// loginBtn=document.querySelector("#login"),
// pwShowHide=document.querySelectorAll(".pw_hide");


// formOpenBtn.addEventListener("click", () => log.classList.add("show"))
// formCloseBtn.addEventListener("click", () => log.classList.remove("show"))



    </script>
