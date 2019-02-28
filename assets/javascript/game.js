
        let win= 0;
        let loss= 0;
        let guessLeft= 10;
        var inputLetter=[];
        let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
        "p","q","r","s","t","u","v","w","x","y","z"]// 
        
        

        document.onkeyup= function(event){
           let userInput=event.key;//doesn't account for upper case letter
            console.log(event);

        var randomLetter=letters[Math.floor(Math.random()*letters.length)];
        console.log(randomLetter);//i had trouble with this being here because every keyup event will generate a random.
        //so there is a new random even if the firts random has not been guessed.

        if(userInput=== randomLetter){
            win++;
            guessLeft=10;//reset
            inputLetter=[];//rest
        }
        
       
        else if(userInput!==randomLetter){
            guessLeft--;
            inputLetter.push(userInput);
            console.log(inputLetter);
            if(guessLeft===0){
                loss++;
                guessLeft=10;
                inputLetter=[];//reset
            }
        }//looks messy probably use some sort of functions!
    
        

        var winText=document.getElementById("win-text");
        winText.textContent=win;
    
        
        var textLoss=document.getElementById("loss-text");
        textLoss.textContent=loss;

        var guess= document.getElementById("guess-number");
        guess.textContent= guessLeft;

        var userInputText= document.getElementById("user-text");//use value of
        userInputText.textContent= inputLetter;
        

    };
