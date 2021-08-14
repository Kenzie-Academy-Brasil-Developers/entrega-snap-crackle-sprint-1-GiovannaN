// Snap = numeros impares - Crackle = numeros multiplos de 5 - SnapCrackle = os dois juntos

let a = "Snap, ";
let b = "Crackle, ";
let c = "SnapCrackle, ";
let d = ","; 
let maxValue = 20; 
let num = 1
let saida = "";
let lista = ["Snap", "Crackle", "SnapCrackle"];

// fazer a função - NAO FAZER ARRAY VAZIO 

funtion snapCrackle() {
  while (num <= maxValue) {
  if (num % 2 !== 0) {
      console.log(a + num)
  } else if (num % 5 === 0) {
      console.log(b + num)
  } else if (num % 5 === 0 || num % 2 !== 1){
      console.log(num + d)
  } else if (num % 5 === 0 && num % 2 !== 0){
      console.log(c + num)
  }
    counter ++
  }
}

console.log();
return snapCrackle();
let final = " ";
console.log(snapCrackle();)

//ver se deu certo 3
