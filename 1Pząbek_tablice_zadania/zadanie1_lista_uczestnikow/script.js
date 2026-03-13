// Twoje rozwiązanie sprawdzianu
let imiona =[];
for(let i = 0; i <3; i++){
    imiona[i] = prompt("podaj imie");
}
for(let l = 0; l <3; l++){
    document.write(imiona[l]+ " ");
}
document.write("<br>");
for(let v = imiona.length-1; v >= 0; v--){
    document.write(imiona[v]+ " ");
}