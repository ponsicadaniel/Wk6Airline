function submit(){
    
    var lname = document.getElementById("lname").value;
    var fname = document.getElementById("fname").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;
    var departure = document.getElementById("departure").value;
    var ret = document.getElementById("return").value;
    
    if(lname==""||fname==""||email==""||origin==""||destination==""||departure==""||ret==""||gender=="X")
        alert("Please fill in all required information.");
    else if(email.includes("@")==false) alert ("Please input a valid email address.");
    else if(departure>ret) alert("Your departure date seems to be later than your return date.");
    else alert("Booking successful!");
}