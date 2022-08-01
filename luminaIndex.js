function homePageFadeOut() {
  var el = document.getElementById("homePage");
  el.classList.add("animatingOut");
  el = document.getElementById("homePage2Testo");
  el.classList.add("animatingIn");
  var nl = document.getElementById("homePage2Nota");
  nl.classList.add("animatingIn");
}

function playAudioFile() {

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
    document.getElementById('suono').load();
    document.getElementById('suono').muted = false;
  }
}

function playAudioFileIOS() {

  const standalone = window.navigator.standalone;
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);

  if (ios) {
    if (!standalone && safari) {
      console.log("browser");
      document.getElementById('suono').muted = false;
    } else if (standalone && !safari) {
      console.log("standalone");
      document.getElementById('suono').muted = false;
    } else if (!standalone && !safari) {
      console.log("uiwebview");
      document.getElementById('suono').muted = false;
    }
  } else {
    console.log("no ios");
  }
}

function backgroundToWhite() {
  var el = document.getElementById('sfondo');
  el.classList.add("animWhite");
}

function backgroundToBlack() {
  var el = document.getElementById('sfondo');
  el.classList.remove("animWhite");
  el.classList.add("animFlashBlack");
}

function backgroundToBlackRST() {
  var el = document.getElementById('sfondo');
  el.classList.add("black");
  el.classList.remove("animFlashBlack");
}

function viewGIF(){
  var el = document.getElementById('gifPlay');
  el.classList.add("gifViewer");
}

function viewGIFLfo(){
  var el = document.getElementById('gifPlay');
  el.classList.add("gifLfo");
}

function viewGIFFlash(){
  var el = document.getElementById('gifPlay');
  el.classList.add("gifFlasher");
}

function flashFlag(){
  var el = document.getElementById('flashBN');
  el.classList.add("gifFlasherON");
}

function flash(){
  var el = document.div.img;
  el.classList.add("gifFlasher");
}
