const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".previous");
const slides = document.querySelectorAll(".slide");
const numberOfslide = slides.length;
let slideNumber = 0;

// next button event
nextbtn.onclick = ()=>{

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    })

    slideNumber++;

    if(slideNumber > (numberOfslide - 1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
}

// previous button event
prevbtn.onclick = ()=>{

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    })

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfslide - 1;
    }
    slides[slideNumber].classList.add("active");
}