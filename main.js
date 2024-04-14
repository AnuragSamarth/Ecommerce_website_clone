function sliderImages(){

const slideImages = document.querySelectorAll(".slide");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next")
let currentSlide = 0;

previousBtn.addEventListener('click', ()=>{
    currentSlide --;
    if(currentSlide < 0){
        currentSlide = slideImages.length - 1;
    }
    imageSlider();
})
nextBtn.addEventListener('click', ()=>{
    currentSlide ++;
    if(currentSlide > slideImages.length - 1){
        currentSlide = 0;
    }
     imageSlider();
})


function imageSlider(){
    slideImages.forEach((elem, index) => {
       elem.style.opacity = 0;
       if(index === currentSlide){
        elem.style.opacity = 1;
       } 
    })
}
}
sliderImages();
