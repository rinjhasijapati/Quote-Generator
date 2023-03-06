let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = 
    [
        '“Be yourself; everyone else is already taken.” ― Oscar Wilde"',
        '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.” ― Albert Einstein',
        '“So many books, so little time.” ― Frank Zappa',
        '“A room without books is like a body without a soul.” ― Marcus Tullius Cicero',
        '“You only live once, but if you do it right, once is enough.” ― Mae West',
        '“Be the change that you wish to see in the world.” ― Mahatma Gandhi',
    ];

btn.addEventListener("click", function(){
    for(var i=0; i<=100; i++){
        var randomQuote = quote[Math.floor(Math.random() * quote.length)]
        output.innerHTML = randomQuote;
    }
})