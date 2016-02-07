$(document).ready(function() {

  var quotes = ['"Give me a firm spot on which to stand and I shall move the earth" - Archimedes 287-212 BC',
                '"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened things" - Leonardo Da Vinci 1452-1519',
                'goodbye', 'dia duit', 'slan']; 
  

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

