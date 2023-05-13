let SearchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>
{
	SearchForm.classList.toggle('active');
	ShoppingCart.classList.remove('active');
	LoginForm.classList.remove('active');
	Navbar.classList.remove('active');
}

let ShoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () =>
{
	ShoppingCart.classList.toggle('active');
	SearchForm.classList.remove('active');
	LoginForm.classList.remove('active');
	Navbar.classList.remove('active');
}

let LoginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>
{
	LoginForm.classList.toggle('active');
	SearchForm.classList.remove('active');
	ShoppingCart.classList.remove('active');
	Navbar.classList.remove('active');
}

let Navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>
{
	Navbar.classList.toggle('active');
	SearchForm.classList.remove('active');
	ShoppingCart.classList.remove('active');
	LoginForm.classList.remove('active');
}


window.onscroll = () =>
{
	SearchForm.classList.remove('active');
	ShoppingCart.classList.remove('active');
	LoginForm.classList.remove('active');
	Navbar.classList.remove('active');
}

 


//this code for our-products slide//

var swiper = new Swiper(".product-slider", {
      loop:true,        //isse slider bar bar chalega and product bar bar slide hote rahenge//
      spaceBetween: 20,

      autoplay: {                     //automatic slider run (when web-page are load then automatic slider activate) //
      	delay: 7600,                 //delay of 7.6 second //
      	disableOnInteraction: false,   //means isper cursor le jane pe ye stop na ho,blki properly run kre //
      },

      breakpoints: {
        0: {
          slidesPerView: 1,      //view of 1 slide // 
        },
        768: {
          slidesPerView: 2,     //view of 2 slide //
        },
        1024: {
          slidesPerView: 3,      //view of 3 slide //
        },
      },
    });

//this code for our-products slide//





//This code for Customer-Review slide//

var swiper = new Swiper(".review-slider", {
      loop:true,        //isse slider bar bar chalega and product bar bar slide hote rahenge//
      spaceBetween: 19,

      autoplay: {                     //automatic slider run (when web-page are load then automatic slider activate) //
      	delay: 7400,                 //delay of 7.4 second //
      	disableOnInteraction: false,   //means isper cursor le jane pe ye stop na ho,blki properly run kre //
      },

      breakpoints: {
        0: {
          slidesPerView: 1,      //view of 1 slide // 
        },
        768: {
          slidesPerView: 2,     //view of 2 slide //
        },
        1024: {
          slidesPerView: 3,      //view of 3 slide //
        },
      },
    });

//This code for Customer-Review slide//




