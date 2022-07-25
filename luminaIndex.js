/*const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {


  btn.style.color = 'white';

});


*/

function textFadeOut() {
  var el = document.getElementById("myButton");
  el.classList.add("animating");

  //This function runs when the CSS animation is completed
/*  var listener = el.addEventListener('animationend', function() {
    el.classList.remove("animating");

    //this removes the listener after it runs so that it doesn't get re-added every time the button is clicked
    el.removeEventListener('animationend', listener);
  });*/
}
