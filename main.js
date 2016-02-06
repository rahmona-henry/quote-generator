$(document).ready(function() {

  var quotes = ['hello', 'goodbye', 'dia duit', 'slan']; 
  

  var button = document.getElementById('button');

  function reply_click(){
    var random = Math.floor(Math.random() * quotes.length)
    document.getElementById('quote').innerHTML = quotes[random]
  }

  button.onclick = function() { reply_click(); }


  
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }

  $("#button").on("click", function () {
    $('body').css('background-color', randomColor());
  });

});

