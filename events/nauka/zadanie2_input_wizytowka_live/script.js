// Tutaj wpisz kod

const poleImie = document.querySelector("#nameInput");
let wiz = document.querySelector("#namePreview");

poleImie.addEventListener("input", function(){
     wiz = poleImie;
})