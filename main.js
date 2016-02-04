$(document).ready(function() {

  var quotes = ['hello', 'goodbye', 'dia duit', 'slan']; 
  

  var button=document.getElementById('qbutton');

  function reply_click(){
    var random = Math.floor(Math.random() * quotes.length)
    document.getElementById('section').innerHTML = quotes[random]
  }

  button.onclick = function() { reply_click(); }

twttr.widgets.createShareButton(
  "https:\/\/dev.twitter.com\/web\/tweet-button",
  document.getElementById("section")

 
);



  
});