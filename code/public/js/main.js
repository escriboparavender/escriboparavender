/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'), 
      contactMessage = document.getElementById('contact-message');
      
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dn430o9','template_i315j8i','#contact-form','yR_jiaJnu_00CEI00')
        .then(()=> {
            contactMessage.textContent = 'Suscriptor guardado correctamente ✅';

            setTimeout( ()=> {
                contactMessage.textContent = '';
            }, 5000 );

            contactForm.reset();
        }, () => {

            contactMessage.textContent = 'Mensaje no enviado (Service Error) ❌';
        });

}

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
