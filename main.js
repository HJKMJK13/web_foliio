// const section=document.querySelector(".make")
// const ul=document.querySelector(".navbar-list2")
// const li=document.querySelector(".navbar-item2")
// const link=document.querySelectorAll("a")
// link.addEventListener("mouseover",event=>{
//     link.style.backgroundColor="red"
// })

// link.addEventListener("",event=>{
//     link.style.backgroundColor="red"
// })

// link.forEach(event=>{
//  event.addEventListener("mouseover",event=>{
    
// })
// })


const makeBox=document.querySelector(".make")
const TextElement=document.querySelector("#text")


TextElement.addEventListener("mouseenter", function(){
  TextElement.innerHTML="<i>I design digital products that make an impact.</i>"
})

TextElement.addEventListener("mouseleave", function(){
    TextElement.textContent="I design digital products that make an impact."
})

const btn=document.querySelector("#btn")
btn.addEventListener("click", function(){
  makeBox.style.display="block"
  btn.innerHTML="<p>X</p>"
  const btn2=document.querySelector("#btn")
  btn2.addEventListener("click",function(){
    makeBox.style.display="none"
    btn2.innerHTML="<p>Kirish</p>"
  })
})

const aboutBox=document.querySelector(".about")
const btn2=document.querySelector("#btn2")
btn2.addEventListener("click", function(){
  aboutBox.style.display="block"
  btn2.innerHTML="<p>X</p>"
  const btn3=document.querySelector("#btn2")
  btn3.addEventListener("click",function(){
    aboutBox.style.display="none"
    btn3.innerHTML="<p>Kirish</p>"
  })
})


const workBox=document.querySelector(".work")
const btn3=document.querySelector("#btn3")
btn3.addEventListener("click", function(){
  workBox.style.display="block"
  btn3.innerHTML="<p>X</p>"
  const btn4=document.querySelector("#btn3")
  btn4.addEventListener("click",function(){
    workBox.style.display="none"
    btn4.innerHTML="<p>Kirish</p>"
  })
})

const navbar=document.querySelector(".navbar")
const firstLink=document.querySelector("#first-link")
firstLink.addEventListener("mouseenter",function(){
    firstLink.style.border="3px solid white"
    firstLink.style.borderRadius="5px"
    firstLink.style.backgroundColor="gray"
    firstLink.style.padding="5px 10px"


})

firstLink.addEventListener("mouseleave",function(){
    firstLink.style.border="none"
    firstLink.style.borderRadius="none"
    firstLink.style.backgroundColor=""
    firstLink.style.padding="none"
})


const secondLink=document.querySelector("#second-link")
secondLink.addEventListener("mouseenter",function(){
    secondLink.style.border="3px solid white"
    secondLink.style.borderRadius="5px"
    secondLink.style.backgroundColor="gray"
    secondLink.style.padding="5px 10px"


})

secondLink.addEventListener("mouseleave",function(){
    secondLink.style.border="none"
    secondLink.style.borderRadius="none"
    secondLink.style.backgroundColor=""
    secondLink.style.padding="none"
})