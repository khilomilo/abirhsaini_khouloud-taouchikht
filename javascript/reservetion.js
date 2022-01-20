var email = document.getElementById("email");
var button = document.getElementById("table");
var date = document.getElementById("date");
var time = document.getElementById("time");
var number = document.getElementById("number");
var name1 = document.getElementById("name");

email.addEventListener("input", aa, false);
date.addEventListener("input", bb, false);
time.addEventListener("input", cc, false);
name1.addEventListener("input", dd, false);



function aa() {
    var rep1 = email.checkValidity(); //pour s assurrer du fonctionnement
    console.log(rep1);
}


function bb() {
    var rep2 = date.checkValidity();
    console.log(rep2);
}

function cc() {
    var rep3 = time.checkValidity();
    console.log(rep3);
}

function dd() {
    var rep4 = name1.checkValidity();
    console.log(rep4);
}


button.addEventListener("click", bbb, false);

function bbb() {
    if (!email.checkValidity()) {
        alert(" email est incorrecte veuillez entrer un email correcte ");
    }
    if (!date.checkValidity()) {
        alert(" date est incorrecte veuillez entrer une date correcte ");
    }
    if (!time.checkValidity()) {
        alert("time est incorrecte veuillez entrer un horaire correcte ");
    }
    if (!number.checkValidity()) {
        alert("veuiller entrer le nombre des personnes");
    }
    if (!name1.checkValidity()) {
        alert("veuiller entrer votre nom");

    } else {
        alert("merci , votre demande est enregistré");
    }

}