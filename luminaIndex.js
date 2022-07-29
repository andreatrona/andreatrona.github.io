function homePageFadeOut() {
  var el = document.getElementById("homePage");
  el.classList.add("animatingOut");
  el = document.getElementById("homePage2Testo");
  el.classList.add("animatingIn");
  var nl = document.getElementById("homePage2Nota");
  nl.classList.add("animatingIn");
}

function playAudioFile() {
  document.getElementById('suono').play();
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
