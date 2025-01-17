var currDate = new Date()
var currHour = currDate.getHours()
var greet

if (currHour < 12) {
    greet = 'Good Morning'
} else if (currHour >= 12 && currHour <= 17) {
    greet = 'Good Afternoon'
} else if (currHour >= 17 && currHour <= 24) {
    greet = 'Good Evening'
}
document.getElementById('greetings').innerHTML = '<b>' + greet + '</b>'


function toggleHamburger() {
    var links = document.getElementById("links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}