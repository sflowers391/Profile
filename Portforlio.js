const topSlideShow = [
    {
        text:"Cu-stom is here to bring YOUR Imagination to life!!!",
    },
    {
        text:"Creativity is all about Imagination",
    },
    {
        text:"Being creative is all about having fun.",
    },
    {
        text:"Creativity takes courage",
    },
    {
        text:"The worst enemy to creativity is self-doubt",
    },
]
 let idx=0;

let message = document.querySelector(".message")

updateslide();

function updateslide(){
    const{text}=topSlideShow[idx]
message.innerText = text
idx++
if(idx === topSlideShow.length){
    idx = 0
}
setTimeout(()=>{
    updateslide()
},4000)
}

let click = document.getElementById("Click me");
let input = document.getElementById("textbox");
let UU = document.getElementById("list");

function addItem(){
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    UU.appendChild(li)
    input.value = "";

    let Del = document.createElement("button");
    Del.appendChild(document.createTextNode("Delete"));
    li.appendChild(Del);
    Del.onclick = removeParent;
}

function removeParent(evt) {
    evt.target.parentNode.remove();
  }

  function inputLength() {
    return input.value.length;
  }

  function addListAfterClick() {
    if (inputLength() > 0 && inputLength() < 7) {
      addItem();
    } else {
      alert("Please enter a value that is less than 7, SORRY");
    }
    if (li() > 2 ){
        alert("You have reached to the max of items")
    }
  }
  
  click.addEventListener("click", addListAfterClick);
  
  const monthNameEl = document.getElementById("month-name");
  const dayNameEl = document.getElementById("day-name");
  const dayNumEl = document.getElementById("day-number");
  const yearEl = document.getElementById("year");

  const date = new Date();
  const month = date.getMonth()
  monthNameEl.innerText = date.toLocaleDateString("en",{
    month:"long"
  })

  dayNameEl.innerText = date.toLocaleString("en",{
    weekday:"long"
  })

  dayNumEl.innerText = date.getDate()

  yearEl.innerText = date.getFullYear()

  const bar = document.querySelector(".fa-bars")
  const menu = document.querySelector(".Menu")

  bar.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu");
  });


