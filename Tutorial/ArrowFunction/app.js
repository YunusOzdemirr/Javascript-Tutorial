// const merhaba = function() {
//     console.log("merhaba");
// }
// merhaba();

//Arrow Function
//Eğer tek parametre alıyorsa parantez koymaya gerek yok direkt
//firstName=>console.log("abc", firstname) şeklinde kullanılabiliyor

// const merhaba = () => {
//     console.log("Merhaba");
// }

// const cube = function(x) {
//     return x * x * x;
// }

const cube = x => x * x * x;
console.log(cube(4));