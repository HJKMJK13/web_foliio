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
const smalltext=document.querySelector("#small-text")
smalltext.addEventListener("mouseenter",function(){
  smalltext.style.backgroudColor="white"
})

TextElement.addEventListener("mouseenter", function(){
  TextElement.innerHTML="<i>I design digital products that make an impact.</i>"
})

TextElement.addEventListener("mouseleave", function(){
    TextElement.textContent="I design digital products that make an impact."
})

const btn=document.querySelector("#btn")
btn.addEventListener("click", event=>{
  makeBox.style.display="block"
  btn.innerHTML="<p>X</p>"
  const btn2=document.querySelector("#btn")
  btn2.addEventListener("click",function(){
    makeBox.style.display="none"
    btn2.innerHTML="<p>Kirish</p>"
    console.log(event)
  })
  console.log(event)
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

const uchLink=document.querySelector("#keyingi-link")
uchLink.addEventListener("mouseenter",function(){
    uchLink.style.border="3px solid white"
    uchLink.style.borderRadius="5px"
    uchLink.style.backgroundColor="gray"
    uchLink.style.padding="5px 10px"


})

uchLink.addEventListener("mouseleave",function(){
    uchLink.style.border="none"
    uchLink.style.borderRadius="none"
    
    uchLink.style.backgroundColor=""
    uchLink.style.padding="none"
})

const tortLink=document.querySelector("#keyingi2-link")
tortLink.addEventListener("mouseenter",function(){
    tortLink.style.border="3px solid white"
    tortLink.style.borderRadius="5px"
    tortLink.style.backgroundColor="gray"
    tortLink.style.padding="5px 10px"


})

tortLink.addEventListener("mouseleave",function(){
    tortLink.style.border="none"
    tortLink.style.borderRadius="none"
    tortLink.style.backgroundColor=""
    tortLink.style.padding="none"
})


const beshLink=document.querySelector("#oxirgi-link")
beshLink.addEventListener("mouseenter",function(){
    beshLink.style.border="3px solid white"
    beshLink.style.borderRadius="5px"
    beshLink.style.backgroundColor="gray"
    beshLink.style.padding="5px 10px"


})

beshLink.addEventListener("mouseleave",function(){
    beshLink.style.border="none"
    beshLink.style.borderRadius="none"
    beshLink.style.backgroundColor=""
    beshLink.style.padding="none"
})