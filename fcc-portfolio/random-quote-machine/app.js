$(document).ready(() => {

    let data = [];
    let tweet = "Checking out a cool Random Quote Machine!"

    $.getJSON("quotes.json", (json) => {
        data = json;
    });
       
    $("#twitter-button-clickable").click(() => {
        window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "Random Quote Tweet", "height=250,width=400")
    });

    $("#quote-button").click(() => {
        tweet = data[Math.floor(Math.random() * data.length)]
        $("#quote-box").text(tweet);
    });
    
});
