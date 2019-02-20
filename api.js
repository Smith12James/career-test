var request = new XMLHttpRequest();
var url = "https://pdqemployees.azurewebsites.net/api/pdqemployees";

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        nameDrink = JSON.parse(request.responseText);
        document.getElementById("root").innerHTML = (nameDrink.drink);
    }
};
request.open("GET", url, true);
request.send();

