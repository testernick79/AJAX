// $(document).ready(function($("hide").click(function() {
//     $(".bioText").hide();
// })) {
//     $("#show").click(function() {
//         $(".bioText").show();

//     });
//     $("#hide").click(function() {
//         $(".bioText").hide();
//     });
// });$(document).ready(function() {
 $(".bioText").hide();
 $("#show").click(function() {
     $(".bioText").show();

 });
 $("#hide").click(function() {
     $(".bioText").hide();
 });




let alberRequest  = new XMLHttpRequest();
alberRequest.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        let albertObj = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = albertObj.name;
        document.getElementById("quote").innerHTML = albertObj.quote;
        document.getElementById("dob").innerHTML = albertObj.dob;
        
    }
};

alberRequest.open("GET", "einstein.json", true);
alberRequest.send();