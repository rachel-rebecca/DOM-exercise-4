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
        document.querySelector("#coinRow").innerHTML += `<div id="${coinData}" class="coin ${coinData}"></div>`;

        // <p class="${coinData}, para">${coinData}</p>



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
        total = Math.round(100 * total) / 100
        console.log(total)
        document.querySelector("#total").innerHTML = "Total: $" + total.toFixed(2);
        // .toFixed(2) will round to two decimal places, leaving a 0 (e.g.: 0.10). But it is a string variable which is why I moved it to the final step.
    } getTotal()




   

    // ~~ I was having trouble adding value = coinValue, like Taz's code, so I had to do a round about way to set the values for each coin
    let pennies = document.querySelectorAll("section#coinRow > div#Penny");
    for (let penny of pennies) {
        penny.addEventListener("click", () => {
            total -= 0.01;
            penny.remove();
            console.log(total)
            document.querySelector("#total").innerHTML = "Total: $" + total.toFixed(2);
            })
        
    }

    // ~~ could use method of target.classList.contains("class goes here")
    let nickels = document.querySelectorAll("section#coinRow > div#Nickel");
    for (let nickel of nickels) {
        nickel.addEventListener("click", () => {
            total -= 0.05;
            total = Math.round(100 * total) / 100
            nickel.remove();
            console.log(total)
            document.querySelector("#total").innerHTML = "Total: $" + total.toFixed(2);
            })
        
    }

    let dimes = document.querySelectorAll("section#coinRow > div#Dime");
    for (let dime of dimes) {
        dime.addEventListener("click", () => {
            total -= 0.10;
            total = Math.round(100 * total) / 100
            dime.remove();
            console.log(total)
            document.querySelector("#total").innerHTML = "Total: $" + total.toFixed(2);
            })
        
    }

    let quarters = document.querySelectorAll("section#coinRow > div#Quarter");
    for (let quarter of quarters) {
        quarter.addEventListener("click", () => {
            total -= 0.25;
            total = Math.round(100 * total) / 100
            quarter.remove();
            console.log(total)
            document.querySelector("#total").innerHTML = "Total: $" + total.toFixed(2);
            })
        
    }
  
})
  

// RIP: Code Graveyard 

  //     }
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



