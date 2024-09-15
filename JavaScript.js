const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets:true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


var app = document.querySelector('.slogan');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(0)
  .typeString('BIENVENUE CHEZ')
  .typeString('<strong style="color:#296D98"> FROM-CLOTHING</strong>!')
  .pauseFor(2000)
  .deleteChars(29)
  .typeString('WELCOME TO')
  .typeString('<strong style="color:#296D98"> FROM-CLOTHING</strong>!')
  .pauseFor(2000)
  .deleteChars(25)
  .typeString('BECAUSE')
  .typeString('<strong style="color:#296D98"> AFRICA </strong>')
  .typeString('DESERVES')
  .typeString('<strong style="color:#296D98"> MORE</strong>!')
  .pauseFor(2000)
  .start();



  var formulaire = document.querySelector('form');


  formulaire.addEventListener('submit', function(e) {
   
  var input_name = document.getElementById('nom'); 
  var input_prenom = document.getElementById('prenom');
  var input_email = document.getElementById('email');
  var input_telephone = document.getElementById('telephone');
  var input_ville = document.getElementById('ville');
  var input_commentaire = document.getElementById('commentaire');
  var spanTel = document.getElementById('erreurTel');
 
  var regex = /^[0-9 +-]+$/

  if (input_name.value.trim() == "") {
    e.preventDefault ();
    input_name.style.borderColor = 'red';
  }

  else if (input_telephone.value.trim() == "") {
    e.preventDefault ();
    input_telephone.style.borderColor = 'red';
   
  }

  else if (regex.test(input_telephone.value) == false) {
    e.preventDefault();
    input_telephone.style.borderColor = 'red';
    spanTel.innerHTML='Format Incorect';
    spanTel.style.color='red';
  }

  else if (input_email.value.trim() == "") {
    e.preventDefault ();
    input_email.style.borderColor = 'red';

  }

 })
   
    