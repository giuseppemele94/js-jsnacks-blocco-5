const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//uso filter che restituisce i valori che vverificano una data condizione 
const evenNumbers = nums.filter((num) => {
    if(num % 2 === 0) {
        return true ;
    }
    return false ; 
});
console.log(evenNumbers); 

// filter versione compatta 
// const evenNumbers = nums.filter((num) => {
//     return num %2 === 0; 
// });
// console.log(evenNumbers); 

//for classico 
// const evenNumbers = []; 
// for (let i = 0; i < nums.length; i++) {
    
//     if(nums[i] % 2 === 0) {
//         evenNumbers.push(nums[i]);
//     }
    
// }
// console.log(evenNumbers); 