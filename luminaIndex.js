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
