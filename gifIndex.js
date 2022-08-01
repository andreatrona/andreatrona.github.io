function flash(){
  var el = document.getElementById('myLightDiv');
  el.classList.add("gifFlasher");
}

function removeFlash(){
  var el = document.getElementById('myLightDiv');
  el.classList.remove("gifFlasher");
}

function flash2(){
  var el = document.getElementById('myLightDiv');
  el.classList.add("gifFlasher2");
}

function removeFlash2(){
  var el = document.getElementById('myLightDiv');
  el.classList.remove("gifFlasher2");
}


const standalone = window.navigator.standalone;
const userAgent = window.navigator.userAgent.toLowerCase();
const safari = /safari/.test(userAgent);
const ios = /iphone|ipod|ipad/.test(userAgent);

if (ios) {
  if (!standalone && safari) {
    console.log("browser");
  } else if (standalone && !safari) {
    console.log("standalone");
  } else if (!standalone && !safari) {
    console.log("uiwebview");
  }
} else {
  console.log("no ios");
}
