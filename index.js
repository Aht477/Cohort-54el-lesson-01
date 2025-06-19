const RANDOM_JOKE_URL = "https://official-joke-api.appspot.com/random_joke";
const JOKE_CARD = document.querySelector(".joke-card");
const JOKE = document.querySelector(".jokes");

JOKE_CARD.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("zapros na server...");

    //tut otpravlaem sapros na server
    const response = await fetch (RANDOM_JOKE_URL, {method: "GET",});

    const result = await response.json();

    console.log(result);

    if (response.ok === true) {
        //tut pischem kod kogda server otvetil uspeh
        JOKE.textContent = `${result.setup} ${result.punchline}`;
    }else {
        //tut pischem kod kogda server otvetil oshibku
        alert("Sorry, oschybka servera, try posge ");
    }



})