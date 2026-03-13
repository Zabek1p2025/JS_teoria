// Twoje rozwiązanie sprawdzianu
let zdanie = prompt("podaj zdanie");
 document.write(zdanie);
let separated = []
separated = separat(" ", " ");
 for(let i = 0; i <separated.lenght-1; i++){
 document.write(separated[i]);
 }