$(document).ready(function() {

// Declare a variable called quotes to hold an array of inventor quotes//
  var quotes = ['"Give me a firm spot on which to stand and I shall move the earth" - Archimedes',
                '"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened things" - Leonardo Da Vinci',
                '"All truths are easy to understand once they are discovered; the point is to discover them" - Galileo',
                '"Any fool can criticise, condemn, and complain, and most fools do" - Benjamin Franklin',
                '"When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us" - Alexander Graham Bell',
                '"If we all did the things we are capable of, we would astound ourselves" - Thomas Edison',
                '"Even a mistake may turn out to be the one thing necessary to a worthwhile achievement" - Henry Ford',
                '"If you are working on something exciting, that you really care about, you dont have to be pushed" - Steve Jobs',
                '"Sometimes it is the people no one can imagine anything of who do the things no one can imagine.” - Alan Turing',
                '"Creativity is intelligence having fun"- Albert Einstein',
                '"I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of the brain unfolding to success."-Nikola Tesla',
                 ]; 
  
// Document.getElementById returns a reference to the HTML
// element with the Id of button. We store this reference in the declared 
// variable called button 

  var button = document.getElementById('button');
// A function called reply_click is created. A varibel random is declared and set equal to a Math. calculation
// Math.random returns a floating-point number between 0 and 1.
// This is multiplied by the number of quotes in the quotes array.
// Math.floor is then used to convert this multiplied number to an integer.
// getElementById is used to reference quote and display a random quote based on the variable random's calculation
// the replreply_click is actioned everytime the quote button is clicked by the user
  function reply_click(){
    var random = Math.floor(Math.random() * quotes.length)
    document.getElementById('quote').innerHTML = quotes[random]
  }

  button.onclick = function() { reply_click(); }

// A function called randomColour is used to change the colour of the background everytime the quote button
// is pressed by the user.
  
  function randomColour() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }

  $("#button").on("click", function () {
    $('body').css('background-color', randomColour());
  });

});

