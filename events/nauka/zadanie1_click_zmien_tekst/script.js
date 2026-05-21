// Tutaj wpisz swój kod
const przycisk = document.querySelector("#changeBtn");
const text = document.querySelector("#text");

przycisk.addEventListener("click",function() { 
    document.body.style.backgroundColor = "lightblue";
    document.body.text = "Tekst został zmieniony!";
})