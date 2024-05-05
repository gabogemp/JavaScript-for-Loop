let userName = prompt("User: ");
let pass = prompt("Password: ");
if (userName == "gemp" && pass == "easy"){
alert("The loop is about to begin")
for(let i=10;i>=-19;i--){    
    if (i!=0){
        document.write("Hello world "+i+"<br>");
        if(i == -10){
            break;
        }
    }
}
document.write("<br>Loop is over")
}
else{
alert("Refresh the page and try again");
}