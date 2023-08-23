const drive=document.querySelector(".drive");
const ride=document.querySelector(".ride");
const rent=document.querySelector(".rent");
let imageMain=document.querySelector("#main-img");
let formEl=document.querySelector(".form-section");
const deliverSection=document.querySelector(".deliver-section");

const text=document.querySelector("#heading-text");
let driveRentBtn=document.querySelector(".drive-rent-btn");
let boxPara=document.querySelector(".box-para");
const formBtnSection=document.querySelector(".form-section-btn ");

ride.addEventListener("click",()=>{
  text.innerHTML="Request a ride now";
 imageMain.src="./img/Rider getting into car.jpg";
 formEl.style.display="block";
   deliverSection.style.display="none";
   formBtnSection.style.display="block";

})

drive.addEventListener("click",()=>{
  text.innerHTML="Get in the driver’s seat and get paid ";
  imageMain.src="./img/Get in the driver_s seat and get paid.jpg";
  formEl.style.display="none";
  driveRentBtn.innerHTML="sign up to drive";
  boxPara.innerHTML="Drive on the platform with the largest network of active riders." 
  deliverSection.style.display="block";
  formBtnSection.style.display="none";
  
 
})

rent.addEventListener("click",()=>{
  text.innerHTML="Make money by renting out your car";
  imageMain.src="./img/Man with a keys.jpg";
  formEl.style.display="none";
  driveRentBtn.innerHTML="Get Started";
  boxPara.innerHTML="Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.";
    deliverSection.style.display="block";
    formBtnSection.style.display="none";

})


// ./img/Rider getting into car.jpg
// ./img/Man with a keys.jpg
// ./img/Get in the driver_s seat and get paid.jpg


// sign-up section

const signUp=document.querySelector("#signup");
const signupSectionPage=document.querySelector("#signup-section-page");
const signUpClose=document.querySelector("#signUp-close");




signUp.addEventListener("click",()=>{
  signupSectionPage.style.display="block";
   disableScroll();
  
})

signUpClose.addEventListener("click",()=>{
  signupSectionPage.style.display="none";
 enableScroll();
})



// scroll disable and enable function
  function disableScroll() {
            // Get the current page scroll position
            scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
            scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
          
                // if any scroll is attempted,
                // set this to the previous value
                window.onscroll = function() {
                    window.scrollTo(scrollLeft, scrollTop);
                };
        }
          
        function enableScroll() {
            window.onscroll = function() {};
        }

  
       