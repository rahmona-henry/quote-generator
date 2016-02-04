$(document).ready(function() {

  var quotes = ['hello', 'goodbye', 'dia duit', 'slan']; 
  

  var button=document.getElementById('qbutton');

  function reply_click(){
    var random = Math.floor(Math.random() * quotes.length)
    document.getElementById('display').innerHTML = quotes[random]
  }

  button.onclick = function() { reply_click(); }

 function ran_col() { //function name
                var color = '#'; // hexadecimal starting symbol
                var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
                color += letters[Math.floor(Math.random() * letters.length)];
                document.getElementById('posts').style.background = color; // Setting the random color on your div element.




button.onclick = function ran_col()


 });

