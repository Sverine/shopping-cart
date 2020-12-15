var requestURL = 'https://www.dlgamer.com/exo_feed_2.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var gamesProduct = request.response;
    var test = gamesProduct.products
    createArray(test);
}

function createArray(x){

    var productArray = {
        games: []
    };

    for(var i in x) {    

        var item = x[i];   
    
        productArray.games.push({ 
            "id" : item.id,
            "name" : item.name,
            "price" : item.price,
            "price_strike" : item.price_strike,
            "img" : item.image_box,
            "activation" : item.drm,
            "system" : item.os,
        });
    }



    
   
    for ( i=1 ; i <=3 ; i++){
        
        /* RANDOM NUMBER */
        randomNumbers= (Math.floor(Math.random() * 30))
        var randomNumbersArray=[randomNumbers];
        console.log(randomNumbersArray)
        
        var gameImg = document.querySelector(".game-img figure img");
        var gameInfoTitle = document.querySelector(".game-info ul li h2");
        var gameSystem = document.querySelector(".game-system figure img");
        var gameActivation = document.querySelector(".game-activation figure img");
        var gamePrice = document.querySelector(".game-price .price-strike");
        var gamePriceStrike = document.querySelector(".game-price .price");
        var gameDiscountPercent = document.querySelector(".game-price .discount-percent p");
        
        
        
        gameImg.src = productArray.games[randomNumbersArray].img;
        gameInfoTitle.textContent = productArray.games[randomNumbersArray].name;
        gamePrice.textContent = productArray.games[randomNumbersArray].price +'€';
        gamePriceStrike.textContent = productArray.games[randomNumbersArray].price_strike + '€';
        
        var percent = (productArray.games[randomNumbersArray].price_strike *100)/productArray.games[randomNumbersArray].price; 
        var finalPercent = percent - 100;
        
        gameDiscountPercent.textContent = '- ' + finalPercent.toFixed(0)+'%';
        
        /* LOGOS OF SYSTEM AND ACTIVATION PLATEFORM */
        if (productArray.games[randomNumbersArray].system == 'Windows'){
            gameSystem.src = 'assets/windows.png'
        }
        else{
            gameSystem.src = 'assets/mac-os.png'
        }
        
        if( productArray.games[randomNumbersArray].activation == 'Steam'){
            gameActivation.src = 'assets/steam.png'
        }
        else{
            gameActivation.src = 'assets/origins.png'
        }

        /* CLONE GAME ROWS */
        let trClone = document.querySelector('.tr-games').cloneNode( true );
        trClone.setAttribute( 'id', i);
        document.querySelector('tbody').appendChild( trClone);
    } 

    /* HACK = REMOVE THE LAST GAME ADDED BY CLONE FUNCTION */
    document.querySelector('.tr-games:last-child').remove();
    
    /* TOTAL PRICE*/

        var priceList = [document.querySelectorAll('.price-strike')]
        var totalPrice = 0;

        for( var i in priceList){
            var item = priceList[i]

            totalPrice +=parseFloat(document.querySelector('.price-strike').textContent);
        }

        var totalPriceItem = document.querySelector(".total-price p:first-child span");
        totalPriceItem.textContent = totalPrice +'€';
    
}
