function back(){
window.location = "activity_1.html"
}

function getscore(){
score=localStorage.getItem("score")
document.getElementById("Scorediv").innerHTML="<h1> score:"+ score + "</h1>"
}