    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const signInform = document.querySelector(".sign-in-container")
    const signUpform = document.querySelector(".sign-up-container")


    signInform.style.display = "none"

    signUpButton.addEventListener('click', () => {
       signInform.style.display = 'none';
             signUpform.style.display = 'block'

       
    });

     signInButton.addEventListener('click', () => {
               signInform.style.display = 'block';
             signUpform.style.display = 'none'

    });
// ============================================
    const navslide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('nav ul li');
      const navulli = document.querySelector('nav li');
      //toggle nav
      burger.addEventListener('click', () => {
        nav.classList.toggle('.nav-active');
      
      //animate links
      navulli.forEach((link, index) => {
        if (link.style.animation) {
           link.style.animation = '';
        } else {
          link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0'
        }
      });
        //burger animation
        burger.classList.toggle('toggle');

      });
    }

    navSlide();