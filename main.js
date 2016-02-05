$(document).ready(function() {

  var quotes = ['hello', 'goodbye', 'dia duit', 'slan']; 
  

  var button=document.getElementById('button');

  function reply_click(){
    var random = Math.floor(Math.random() * quotes.length)
    document.getElementById('displaybox').innerHTML = quotes[random]
  }

  button.onclick = function() { reply_click(); }



 });

