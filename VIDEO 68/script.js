console.log("Harry")

//let boxes = document.getElementsByClassName("box")
//console.log(boxes)

//boxes[2].style.backgroundcolor = "Red"

//document.getElementById("redbox").style.backgroundColor = "red"



//document.querySelector(".box").Style.backgroundColor = "green";
//console.log(documnet.queryselectorAll(".box").style.backgroundColor) = "green";
console.log(document.querySelectorAll(".box"))


document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
})

