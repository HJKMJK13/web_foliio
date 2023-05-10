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

const sonElement=document.querySelectorAll("#son")
const qoshishElement=document.querySelectorAll("#qoshish")
qoshishElement.addEventListener("click",function(){
    sonElement.textContent="qos"
})
