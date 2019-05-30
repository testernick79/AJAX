let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("login").innerHTML = myObj.login;
        document.getElementById("bio").innerHTML = myObj.bio;

    }
};
newRequest.open("GET", "https://api.github.com/users/testernick79", true);
newRequest.send();