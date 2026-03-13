// Twoje rozwiązanie sprawdzianu
let blocklog = ["Analiza", "Projekt", "Kod", "Testy"];
for(let l = 0; l <blocklog.length; l++){
    document.write(blocklog[l]+ " ");
}
document.write("<br>")
let x = blocklog.shift();
blocklog.shift();
blocklog.unshift(x);
let y = prompt("Jakie nowe zadanie dodać na koniec kolejki?");
blocklog.push(y)
for(let l = 0; l <blocklog.length; l++){
    document.write(blocklog[l]+ " ");
}
document.write("<br>")
document.write("W kolejce jest teraz "+blocklog.length+" zadań")