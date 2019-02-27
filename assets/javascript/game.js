
        let win= 0;
        let loss= 0;
        let guessLeft= 10;
        
        let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
        "p","q","r","s","t","u","v","w","x","y","z"]// i wonder if there is a is simpler way to write this!!!
        
        var userInput= document.getElementById("user-text");//use value of

        document.onkeyup= function(event){
            userInput=event.key;
            console.log(event);

            /*for(var i=0; i<10; i++){
                guess
            }*/

           

        var randomLetter=letters[Math.floor(Math.random()*letters.length)];
        console.log(randomLetter);

        if(userInput=== randomLetter){
            win++;
            guessLeft=10;
        }
        
       
        else if(userInput!==randomLetter){
            guessLeft--;
            if(guessLeft===0){
                loss++;
                guessLeft=10;
            }
        }
    
        
        

        

        var winText=document.getElementById("win-text");
        winText.textContent=win;
    
        
        var textLoss=document.getElementById("loss-text");
        textLoss.textContent=loss;

        var guess= document.getElementById("guess-number");
        guess.textContent= guessLeft;
        
    };
