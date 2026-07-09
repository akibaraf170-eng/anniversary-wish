const PASSWORD = "ARAF'S MALIHA";

/* ---------------------------- */

const intro = document.getElementById("intro");
const passwordPage = document.getElementById("passwordPage");
const giftPage = document.getElementById("giftPage");
const hero = document.getElementById("hero");
const letterPage = document.getElementById("letterPage");
const galleryPage = document.getElementById("galleryPage");
const counterPage = document.getElementById("counterPage");
const finalPage = document.getElementById("finalPage");

const startBtn = document.getElementById("startBtn");
const unlockBtn = document.getElementById("unlockBtn");
const giftBox = document.getElementById("giftBox");

const letterBtn = document.getElementById("letterBtn");
const galleryBtn = document.getElementById("galleryBtn");
const counterBtn = document.getElementById("counterBtn");
const finalBtn = document.getElementById("finalBtn");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

/* ---------------------------- */

startBtn.onclick = () => {

intro.classList.add("hidden");

passwordPage.classList.remove("hidden");

};

/* ---------------------------- */

unlockBtn.onclick = () => {

const pass = document.getElementById("password").value.trim();

if(pass === PASSWORD){

passwordPage.classList.add("hidden");

giftPage.classList.remove("hidden");

}
else{

document.getElementById("wrongPassword").innerHTML =
"❌ Wrong Password ❤️";

}

};

/* ---------------------------- */

giftBox.onclick = () => {

giftBox.style.transform="scale(0) rotate(720deg)";
giftBox.style.opacity="0";

setTimeout(()=>{

giftPage.classList.add("hidden");

hero.classList.remove("hidden");

createHearts();

},900);

};

/* ---------------------------- */

letterBtn.onclick = ()=>{

hero.classList.add("hidden");

letterPage.classList.remove("hidden");

typeWriter();

};

/* ---------------------------- */

galleryBtn.onclick = ()=>{

letterPage.classList.add("hidden");

galleryPage.classList.remove("hidden");

};

/* ---------------------------- */

counterBtn.onclick = ()=>{

galleryPage.classList.add("hidden");

counterPage.classList.remove("hidden");

};

/* ---------------------------- */

finalBtn.onclick = ()=>{

counterPage.classList.add("hidden");

finalPage.classList.remove("hidden");

fireworks();

};

/* ==========================================
   TYPEWRITER
========================================== */

const letter = `আমার লক্ষ্মী মালিহা, ❤️

আজ আমাদের সম্পর্কের এক বছর পূর্ণ হলো—অর্থাৎ পুরো ৩৬৫টা দিন। দেখতে দেখতে এতগুলো দিন কীভাবে কেটে গেল, সত্যিই বুঝতেই পারলাম না। সময়টা খুব দ্রুত চলে গেছে, কিন্তু এই সময়ের মধ্যেই তুমিও খুব দ্রুত আমার জীবনের সবচেয়ে গুরুত্বপূর্ণ মানুষ হয়ে উঠেছো।

আজ তুমি শুধু আমার ভালোবাসার মানুষ নও, তুমি আমার সবচেয়ে কাছের বন্ধু, আমার সবচেয়ে আপন, আমার সবচেয়ে প্রিয় মানুষ।

সেদিন বাসে তোমাকে প্রথম দেখেছিলাম। তখন কি একবারের জন্যও ভেবেছিলাম, সেই ছোট্ট একটা দেখা একদিন আমাদের জীবনের এত সুন্দর একটা গল্পের শুরু হয়ে যাবে?

এই এক বছরে রাগ হয়েছে, অভিমান হয়েছে, ভুল বোঝাবুঝি হয়েছে, কিন্তু আমরা কখনো একে অপরের হাত ছাড়িনি।

আমি আল্লাহর কাছে দোয়া করি, আমাদের এই সম্পর্ক যেন একদিন সুন্দর হালাল বিয়েতে রূপ নেয়। ইনশাআল্লাহ।

তুমি সবসময় আমার পাশে থেকো।

আমি প্রতিশ্রুতি দিচ্ছি...

আমি তোমাকে সবসময় ভালোবাসব,
সম্মান করব,
এবং আগলে রাখব।

Happy 1st Anniversary ❤️

— Araf`;

let i=0;

function typeWriter(){

const area = document.getElementById("typewriter");

area.innerHTML="";

i=0;

typing();

}

function typing(){

if(i<letter.length){

document.getElementById("typewriter").innerHTML += letter.charAt(i);

i++;

setTimeout(typing,25);

}

}

/* ==========================================
   LIVE COUNTER
========================================== */

const startDate =
new Date("July 10, 2025 00:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = now-startDate;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))/60000);

const seconds =
Math.floor((distance%(60000))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

},1000);

/* ==========================================
   MUSIC
========================================== */

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸";

}else{

music.pause();

playing=false;

musicBtn.innerHTML="🎵";

}

};

/* ========= FLOATING HEARTS ========= */

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},350);

}

/* ========= PARTICLES ========= */

const particleContainer=document.getElementById("particles");

function createParticles(){

setInterval(()=>{

const p=document.createElement("span");

p.style.position="absolute";

p.style.width="4px";

p.style.height="4px";

p.style.borderRadius="50%";

p.style.background="white";

p.style.left=Math.random()*100+"vw";

p.style.top="100vh";

p.style.opacity=Math.random();

p.style.boxShadow="0 0 15px white";

particleContainer.appendChild(p);

let y=100;

const move=setInterval(()=>{

y--;

p.style.top=y+"vh";

if(y<=-5){

clearInterval(move);

p.remove();

}

},40);

},120);

}

createParticles();

/* ========= IMAGE CLICK ZOOM ========= */

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.left="0";

overlay.style.top="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.95)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

image.style.boxShadow="0 0 40px hotpink";

overlay.appendChild(image);

overlay.onclick=()=>{

overlay.remove();

};

document.body.appendChild(overlay);

});

});

/* ========= FIREWORKS ========= */

function fireworks(){

const area=document.getElementById("fireworks");

setInterval(()=>{

const fire=document.createElement("div");

fire.style.position="absolute";

fire.style.left=Math.random()*100+"%";

fire.style.top=Math.random()*70+"%";

fire.style.width="12px";

fire.style.height="12px";

fire.style.borderRadius="50%";

fire.style.background="white";

fire.style.boxShadow=`
0 0 10px white,
0 0 20px hotpink,
0 0 35px deeppink,
0 0 55px gold`;

fire.style.animation="explode .9s ease-out forwards";

area.appendChild(fire);

setTimeout(()=>{

fire.remove();

},900);

},250);

}

/* ========= EXPLODE KEYFRAME ========= */

const style=document.createElement("style");

style.innerHTML=`

@keyframes explode{

0%{

transform:scale(.2);

opacity:1;

}

100%{

transform:scale(8);

opacity:0;

}

}

`;

document.head.appendChild(style);

/* ========= LOVE BUTTON ========= */

const loveBtn=document.getElementById("loveBtn");

loveBtn.onclick=()=>{

for(let i=0;i<120;i++){

setTimeout(()=>{

const h=document.createElement("div");

h.className="heart";

h.innerHTML="💖";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*40)+"px";

h.style.animationDuration=(3+Math.random()*4)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},7000);

},i*30);

}

alert("❤️ Forever & Always ❤️\n\nHappy 1st Anniversary, My Lakshmi Maliha.\n\nI Love You Endless. — Araf");

};

/* ========= ENTER KEY ========= */

document
.getElementById("password")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){

unlockBtn.click();

}

});

/* ========= PAGE LOADED ========= */

window.onload=()=>{

window.scrollTo(0,0);

music.volume=0.35;

};