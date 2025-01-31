let a=document.querySelectorAll('input');
let b=document.querySelectorAll('select');
let i=0
for (let i of a) {
    i.addEventListener('focus',()=>{
        i.style.boxShadow="0px 0px 15px skyblue";
    })
    i.addEventListener('blur',()=>{
        i.style.boxShadow="";
    })
}
