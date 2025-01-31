let a= document.querySelectorAll('.mrp');
let r=document.querySelectorAll('.dis');
let d;
let pr=[]
let c=0;
for(let i of a){
    d=((i.innerText-r[c].innerText)/i.innerText)*100;
    pr.push(d);
    c++;
}
a1=document.querySelectorAll('.per');
c=0
for(let i of pr){
    a1[c].innerHTML="-"+Math.round(i*100)/100+'%';
    a[c].innerText='₹'+a[c].innerText;
    r[c].innerText='₹'+r[c].innerHTML;
    c++;
}
//   ₹