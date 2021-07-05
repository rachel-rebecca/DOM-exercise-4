"use strict"


let total = 0;


// ~~ function to change form on "submit" instead of "click" and preventing default of forms trying to reload.
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();



    //~~ getting the number of coins input data from the form 
    const data = new FormData(document.querySelector("form"));
    const userNumber = data.get("number");
    console.log(userNumber);

    // ~~ gets the input data from the "select" tag (using other code, but could use FormData/.get)
    const coinData = document.querySelector("select").selectedOptions[0].innerText;
    console.log(coinData)

    // returning value of the coin (e.g.: penny = 0.01)
    let coinValue = document.querySelector("select").selectedOptions[0].value
    console.log(coinValue)

    for (let i = 0; i < userNumber; i++) {
        // if (coinData === "Penny") {
        //     document.querySelector("#coinRow").innerHTML += `<div id="pennyDiv" class="pennyDiv"><p class="para">Penny</p></div>`;
        // } else if (coinData === "Nickel") {
        //        document.querySelector("#coinRow").innerHTML += `<div id="nickelDiv" class="nickelDiv"><p class="para">Nickel</p></div>`;
        // } else if (coinData === "Dime") {
        //     document.querySelector("#coinRow").innerHTML += `<div id="dimeDiv" class="dimeDiv"><p class="para">Dime</p></div>`;
        // } else {
        //     document.querySelector("#coinRow").innerHTML += `<div id="quarterDiv" class="quarterDiv"><p class="para">Quarter</p></div>`;
        // }

        // ~~ went the long route at first. Adding new coin to #coinRow section
        document.querySelector("#coinRow").innerHTML += `<div id="${coinData}" class="${coinData}"><p class="${coinData}, para">${coinData}</p></div>`;


    } 
    

    // ~~ Taz's code that I fit to my code.
    // total  += userNumber * coinValue;
    // document.querySelector("#total").innerHTML = "Total: $" + total.toFixed(2);

    // ~~my code for getting the total and printing to the screen
    function getTotal() {
        for (let i = 0; i < userNumber; i++) {
            if (coinData === "Penny") {
                total += 0.01;
                console.log(total)
            } else if (coinData === "Dime") {
                total += 0.10;
                console.log(total)
            } else if (coinData === "Nickel") {
                total += 0.05;
                console.log(total)
            } else if (coinData === "Quarter") {
                total += 0.25;
                console.log(total)
            }
        } 
        total = Math.round(100 * total)/100
        console.log(total)    
        document.querySelector("#total").innerHTML = "Total: $" + total.toFixed(2);
        // .toFixed(2) will round to two decimal places, leaving a 0 (e.g.: 0.10). But it is a string variable which is why I moved it to the final step.
     } getTotal()

    

    const newCoins = document.querySelectorAll("section#coinRow > div");
    for (let coin of newCoins) {
        coin.setAttribute("value", coinValue);
    }
   

    document.querySelector("section").addEventListener("click", (event) => {
        if(event.target.localName === "div") {
            event.target.remove();
            total -= +(event.target.attributes.value.value);
            console.log(total)
        }
    })
              
    //  for (let coin of newCoins) {
    //     coin.setAttribute("value", coinValue);
    //         let removeCoin = () => {
    //             coin.remove(); 
    //         }
        
    //     coin.addEventListener("click", removeCoin)

        // function subtractFrom () {
    
        //     if (coin.class === "Penny") {
        //         total = total - .01;
        //     } else if (coin.class === "Nickel") {
        //         total = total - .05;
        //     } else if (coin.class === "Dime") {
        //         total = total - .10;
        //     } else if (coin.class === "Quarter") {
        //         total = total - .25;
        //     }
        //     console.log(total)
        //     document.querySelector("#total").innerHTML = "Total: $" + total;
        // } subtractFrom()
                
    // }


    // function subtractFrom () {
    
    //     if (coin.class === "Penny") {
    //         total = total - .01;
    //     } else if (coin.class === "Nickel") {
    //         total = total - .05;
    //     } else if (coin.class === "Dime") {
    //         total = total - .10;
    //     } else if (coin.class === "Quarter") {
    //         total = total - .25;
    //     }
    //     console.log(total)
    //     document.querySelector("#total").innerHTML = "Total: $" + total;
    // } subtractFrom()
    
})
   


// RIP: Code Graveyard 


   


