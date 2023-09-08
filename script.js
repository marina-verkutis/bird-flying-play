const bird = document.getElementById("bird");
const three =  document.getElementById("three");

document.addEventListener("keydown", function(even) {
    fly();
});

function fly () {
    if(bird.classList != "fly") {
        bird.classList.add("fly");
    }
    setTimeout(function() {
        bird.classList.remove("fly");
    }, 300)
}

let isAlive = setInterval(function() {
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let threeLeft = parseInt(window.getComputedStyle(three).getPropertyValue("left"));

    if(threeLeft < 30 && threeLeft > 0 && birdTop >=140) {
        alert("Боб Марли выехал!");
    }
}, 10)