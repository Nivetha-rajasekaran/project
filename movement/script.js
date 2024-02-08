const p=document.getElementById('ch');
const clr=document.getElementById('clr');
const rect=document.querySelector('.rect');
const count=document.querySelector('.count');

let c=1;
let f=0;
let t=0;
function increment(){
    c++;
    count.textContent=c;

    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    var rgb=`rgb(${red},${green},${blue})`;
    rect.style.backgroundColor=rgb;
     if(f == 0){
        t--;
    }
    if(f == 1){
        t++;
    }
    if(t <= 0){
        f=1;
    }
    if(t >= 650){
        f=0;

    }
rect.style.top = t + 'px'
}

let ch
p.addEventListener('click',()=>{
     ch=setInterval(increment,2);
     
});
clr.addEventListener('click', () => {
    clearInterval(ch);
});