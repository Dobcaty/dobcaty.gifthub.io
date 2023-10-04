function sayHello() {
    const name = prompt("What is your name?");
    alert("Hello, " + name + "! Welcome to my website.");
}

sayHello();

function rollDice(){
    let dice = Math.floor(Math.random() *6) +1;
    alert("You have rolled a " + dice +"!");
}

rollDice();

function jobSearch() {
    let months = 0;
    let dice = Math.floor(Math.random() *6) +1;
    months += dice;
    alert("It will take you "  + months +  " months to get your first job as a developer");
}

jobSearch();

function comfortLevel (html, css, js) {
    const avarage = (html + css + js) / 3;
    if (avarage >=7) {
        alert("You are already on your way to being a pro!");
    } else if (avarage >=4) {
        alert("Don't worry you're nearly there!");
    } else {
        alert("If you keep trying you will be there!");
    }
}

comfortLevel(9, 7, 3);

function darkMode (){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "white";
}