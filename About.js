function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session')

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM'
    }

    if(hrs > 12){
        hrs= hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML =sec;
}
setInterval(displayTime, 10);


const sun = document.querySelector('.sun');
const sky1 = document.querySelector('.sky1');
const sky2 =  document.querySelector('.sky2');
const grass = document.querySelector('.grass');
const leftGrass = document.querySelector('.grass2');
const moon = document.querySelector('.moon');
const firstLight = document.querySelector('.lights1');
const secondLight = document.querySelector('.lights2');

const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', ()=>{
   sun.classList.toggle('Hide')
   moon.classList.toggle('real-moon')
   sky1.classList.toggle('night');
   sky2.classList.toggle('night');
   grass.classList.toggle('night-grass');
   leftGrass.classList.toggle('night-grass');
   firstLight.classList.toggle('show-light');
   secondLight.classList.toggle('show-light');
});


const song = document.getElementById('.song');
const playPauseBTN = document.getElementById('music');
const count = 0;

function playPause(){
    if(count ==0){
        count = 1;
        song.play();
    }else{
        count = 0;
        song.pause();
    }
};
const switch1 = document.querySelector('.switch1');
const switch2 = document.querySelector('.switch2');
const blind1 = document.querySelector('.blind1');
const blind2 = document.querySelector('.blind2');

switch1.addEventListener('click', ()=>{
   blind1.classList.add('up1')
});

switch2.addEventListener('click', ()=>{
    blind2.classList.add('up2')
 });

 const computerSlideShow = [
    {
        img:"https://img.icons8.com/color/48/null/paint-brush.png",
    },
    {
        img:"https://img.icons8.com/fluency/48/null/music.png",
    },
    {
        img:"https://img.icons8.com/fluency/48/null/books.png",
    },
    {
        img:"https://img.icons8.com/fluency/48/null/source-code.png",
    },
 ]

 let idx=0;

let screenPic = document.querySelector(".screen-pic")


updateslide();

function updateslide(){
    const{img}=computerSlideShow[idx]
screenPic.src = img
idx++
if(idx === computerSlideShow.length){
    idx = 0
}
setTimeout(()=>{
    updateslide()
},4000)
}

const bar = document.querySelector(".fa-bars")
  const menu = document.querySelector(".Menu")

  bar.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu");
  });












    
