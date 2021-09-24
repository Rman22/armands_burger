///////////loading
$(window).on("load", function(){
    $(".loader").fadeOut(100);
    $(".toLoad").fadeIn(100 );
})

///////////sidebar menu
function openMenu(){
        document.getElementById("rightMenu").style.width = "83.3333%";

    }
    function closeMenu(){
        document.getElementById("rightMenu").style.width = "0";

    }

////////contact hover
const callHover = document.getElementById("callHover")
const showHover = document.getElementById("showHover")
const closeHover = document.getElementById("closeHover")

callHover.addEventListener("click", () => {
 showHover.style.display="block"

})
closeHover.addEventListener("click", () => {
    showHover.style.display="none"
   
   })

///////////sign in
const callSignIn = document.getElementById("signInBtn")
const callSignInTwo = document.getElementById("signInBtn2")

const showSignIn = document.getElementById("signIn")
const closeSignIn= document.getElementById("closeSignIn")
const closeSignInTwo = document.getElementById("closeSignIn2")
const toSignUpForm = document.getElementById("toSignUpForm")

const showSignUp = document.getElementById("signUp")
const closeSignUp= document.getElementById("closeSignUp")
const closeSignUpTwo= document.getElementById("closeSignUp2")
const toSignInForm = document.getElementById("toSignInForm")

const backToTop = document.getElementById("scrollUp");

toSignUpForm.addEventListener("click", () => {
    showSignIn.style.display="none"
    showSignUp.style.display="block"
})

toSignInForm.addEventListener("click", () => {
    showSignIn.style.display="block"
    showSignUp.style.display="none"
})

closeSignUp.addEventListener("click", () => {
    showSignUp.style.display="none"
})
closeSignUpTwo.addEventListener("click", () => {
    showSignUp.style.display="none"
})

callSignIn.addEventListener("click", () => {
 showSignIn.style.display="block"
})

callSignInTwo.addEventListener("click", () => {
    document.getElementById("rightMenu").style.width = "0";
    showSignIn.style.display="block"
   
})
closeSignIn.addEventListener("click", () => {
    showSignIn.style.display="none"
})

closeSignInTwo.addEventListener("click", () => {
    showSignIn.style.display="none"
})



window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {

        backToTop.classList.remove('hidden');
        backToTop.classList.add('block');
    } else {

        backToTop.classList.remove('block');
        backToTop.classList.add('hidden');
    }
})

///////////// Displaying Menus

const dataMenus =[
    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Famirali-mirhashemian-pucP6jZSyV4-unsplash.jpg?alt=media&token=9a8861f6-68ed-45b1-b705-fe8b79a971db',
        burgerName: 'aCheese Burger',
        burgerInclusion: 'Beef Patty, Onions, Tomatoes, Pickles, Letuce, Ketchup, Mayo, Mustard',
        burgerPrice : '75.00',
        promo: true,
    
    },

    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Fbimo-luki-mwHzM7qB7vk-unsplash.jpg?alt=media&token=7e489fad-27bc-44aa-a7db-22cc06ac3dd2',
        burgerName: 'bBeef Burger1',
        burgerInclusion: 'Pickles, Letuce, Ketchup, Mayo, Mustard,Beef Patty, Onions, Tomatoes',
        burgerPrice: '85.00',
        promo: true
    },
    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Fbimo-luki-mwHzM7qB7vk-unsplash.jpg?alt=media&token=7e489fad-27bc-44aa-a7db-22cc06ac3dd2',
        burgerName: 'cBeef Burger1',
        burgerInclusion: 'Pickles, Letuce, Ketchup, Mayo, Mustard,Beef Patty, Onions, Tomatoes',
        burgerPrice: '85.00',
        promo: true
    },
    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Fbimo-luki-mwHzM7qB7vk-unsplash.jpg?alt=media&token=7e489fad-27bc-44aa-a7db-22cc06ac3dd2',
        burgerName: 'dBeef Burger1',
        burgerInclusion: 'Pickles, Letuce, Ketchup, Mayo, Mustard,Beef Patty, Onions, Tomatoes',
        burgerPrice: '85.00',
        promo: true
    },
    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Fbimo-luki-mwHzM7qB7vk-unsplash.jpg?alt=media&token=7e489fad-27bc-44aa-a7db-22cc06ac3dd2',
        burgerName: 'eBeef Burger1',
        burgerInclusion: 'Pickles, Letuce, Ketchup, Mayo, Mustard,Beef Patty, Onions, Tomatoes',
        burgerPrice: '85.00',
        promo: true
    },
    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Fbimo-luki-mwHzM7qB7vk-unsplash.jpg?alt=media&token=7e489fad-27bc-44aa-a7db-22cc06ac3dd2',
        burgerName: 'fBeef Burger1',
        burgerInclusion: 'Pickles, Letuce, Ketchup, Mayo, Mustard,Beef Patty, Onions, Tomatoes',
        burgerPrice: '85.00',
        promo: true
    },
    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Fmiha-rekar-ISVtBKNhJ2g-unsplash.jpg?alt=media&token=e22cda6b-1e9e-48f1-88e2-0cd366268b8b',
        burgerName: 'gChess Burger',
        burgerInclusion: 'Beef Patty, Onions, Tomatoes, Pickles, Letuce, Ketchup, Mayo, Mustard',
        burgerPrice : '100.00',
        promo:false
    },

    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Fmiha-rekar-ISVtBKNhJ2g-unsplash.jpg?alt=media&token=e22cda6b-1e9e-48f1-88e2-0cd366268b8b',
        burgerName: 'hUltra Burger1',
        burgerInclusion: 'Pickles, Letuce, Ketchup, Mayo, Mustard,Beef Patty, Onions, Tomatoes',
        burgerPrice: '125.00',
        promo:false
    },
    {
        burgerImage: 'https://firebasestorage.googleapis.com/v0/b/armand-d8df6.appspot.com/o/armandburger%2FarmandBurger%2Fmiha-rekar-ISVtBKNhJ2g-unsplash.jpg?alt=media&token=e22cda6b-1e9e-48f1-88e2-0cd366268b8b',
        burgerName: 'iChessy Burgers',
        burgerInclusion: 'Pickles, Letuce, Ketchup, Mayo, Mustard,Beef Patty, Onions, Tomatoes',
        burgerPrice: '135.00',
        promo:false
    }
];

$("#searchEng").on("keyup", function(){
    let value = $(this).val()
    let data = searchMenus(value, dataMenus)
    addMenus(data)
})



addMenus(dataMenus)

function searchMenus(value, data){
    let filteredMenus = []



    for (let i = 0; i < data.length; i++){
        value = value.toLowerCase()
        let nameOfBurger = data[i].burgerName.toLowerCase()
        if(nameOfBurger.includes(value)){
            filteredMenus.push(data[i])

        }
        
    }
    return filteredMenus
}

const getMenus = document.getElementById("getMenus")
function addMenus(data){
    const getMenus = document.getElementById("getMenus")
    const getPromos = document.getElementById("getPromos")
    getMenus.innerHTML=''
    getPromos.innerHTML=''
    for (let i = 0; i < data.length; i++){
        if (data[i].promo === true){
            let menus = 
            `<div class="shadow-2xl  w-60  text-sm menuTransistion">
                        <div class="h-40 w-60">
                            <img class="rounded-t-lg h-full w-full object-cover" src="${data[i].burgerImage}" alt="">
                            
                        </div>
                        
                        <div class="bg-white px-3 py-2  ">
                            <h2 class="text-lg text-gray-700 font-semibold">${data[i].burgerName}</h2>
                            <p>₱${data[i].burgerInclusion}</p>
                            
                        </div>
                        <div class="cartDiv flex justify-between bg-pallete6 rounded-b-lg px-5">
                            <span class="py-2 text-pallete3 flex justify-center  ">${data[i].burgerPrice}</span>
                            <button class="cartBtn text-pallete3" id="addToCartBtn"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg></button>
                        </div>
                        
                    </div>
            `
            getMenus.innerHTML += menus 
      
        }
        else {
            
            
                let promos = 
                `<div class="shadow-2xl relative w-60  text-sm menuTransistion">
                            <div class="h-40 w-60 ">
                                <img class="rounded-t-lg h-full  w-full object-cover" src="${data[i].burgerImage}" alt="">
                                <p class="absolute py-2 px-5 text-pallete3 bg-red-500 rounded-r-lg top-2 left-0">Promo</p>
                            </div>
                            
                            <div class="bg-white px-3 py-2  ">
                                <h2 class="text-lg text-gray-700 font-semibold">${data[i].burgerName}</h2>
                                <p>${data[i].burgerInclusion}</p>
                                
                            </div>
                            <div class="cartDiv flex justify-between bg-pallete6 rounded-b-lg px-5">
                                <span class="py-2 text-pallete3 flex justify-center  ">${data[i].burgerPrice}</span>
                                <button class="cartBtn text-pallete3" id="addToCartBtn"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg></button>
                            </div>
                            
                        </div>
                `
          
                getPromos.innerHTML += promos
            
        }
        
        // const addToCart =  getMenus.querySelector(".cartDiv .cartBtn")
    
        // addToCart.addEventListener("click", function() {
        //   console.log("add", data[i])
            
        // })

    }

}





// ////////////////map
  // Initialize and add the map
  function initMap() {
    // The location of badian
    const badian = { lat: 9.875779214995761, lng: 123.39137016701808};

    // The map, centered at badian
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: badian,
    });
    // The marker, positioned at badian
    const marker = new google.maps.Marker({
      position: badian,
      map: map,
    });
  }

  //////////////////////////////////animation/////////////////


































