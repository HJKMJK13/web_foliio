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
// TextElement.addEventListener("mouseover",event=>{
//     event.textContent.add("hammasi")
// })

// function hover(){
//     TextElement.textContent="hammasi"
// }
// hover()

TextElement.addEventListener("mouseenter", function(){
    // TextElement.textContent=""
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