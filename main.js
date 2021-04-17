const open = document.querySelector('#open')
const close = document.querySelector('#close')
const nav = document.querySelector('.navigation')
open.addEventListener("click",()=>{
    nav.style.display = "block"
    
    open.style.display = "none"
    close.style.display = "block"
})
close.addEventListener("click",()=>{
    nav.style.display = "none"
    open.style.display = "block"
    close.style.display = "none"
})