// Twoje rozwiązanie sprawdzianu
// let min = Number(prompt("podaj min liczbę"));
// let max = Number(prompt("podaj max liczbę"));

let numbers = [2,5,7,8,1,3,0,8,7,4];
// for(let i = 0; i <=10; i++){
// numbers[i] = Math.random(1, 10) ;
//}
for(let i = 0; i <10; i++){
    document.write(numbers[i])
    document.write("<br>")
    }
    document.write("<br>")
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i]<numbers[i+1]){
         
        }
            else{
                numbers[i] = temp
                numbers[i] = numbers[i+1]
                temp = numbers[i+1]
            }
        document.write(numbers[i]);
            document.write("<br>");
    }
