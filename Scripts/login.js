function VALID() {
var x = document.getElementById("username").value;
var y = document.getElementById("password").value;
//alert('PLS ENTER USERNAME');
if(x == ""){
    alert('PLS ENTER USERNAME');
}
if(y == ""){
    alert('PLS ENTER PASSWORD ');
}
if(x == "KKEK" && y=="KKEK"){
    window.location.replace("dashboard.html");
}
else{
    x = 'none';
}
}