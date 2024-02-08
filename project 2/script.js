const plus=document.getElementById('inc')
const clr=document.getElementById('clr')
const box=document.querySelector('.box')
const count=document.querySelector('.count')

let c=1
let l=0
let i
let m
function increment(){
    c++
    count.textContent=c
}
let f=0
function move(){
    if(f==0){
        l++
    }
    if(f==1){
        l--
    }
    if(l==0){
        f=0
    }
    if(l==1400){
        f=1
    }
box.style.left = l + 'px'
}
plus.addEventListener('click',()=>{
i=setInterval(increment,20)
m=setInterval(move,20)

})
clr.addEventListener('click',()=>{
    clearInterval(i)
    clearInterval(m)
})