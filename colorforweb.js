const btn1=document.getElementById('gen1');
const btn2=document.getElementById('gen2');
const btn3=document.getElementById('gen3');
const primary=document.getElementById('primary');
const secondary=document.getElementById('secondary');
const hex1=document.getElementById('hex1');
const hex2=document.getElementById('hex2');
const txts=document.querySelectorAll('.txt');

btn1.onclick=()=>{
   const hex="#"+ Math.random().toString(16).substring(2,8);
   primary.style.backgroundColor=hex;
   hex1.innerHTML=hex;
}

btn2.onclick=()=>{
    const hex="#"+ Math.random().toString(16).substring(2,8);
    secondary.style.backgroundColor=hex;
    hex2.innerHTML=hex;
 }

 btn3.onclick=()=>{
    const hex="#"+ Math.random().toString(16).substring(2,8);
    txts.forEach((txt)=>{
      txt.style.color=hex;
    });
    console.log(txts);
 }