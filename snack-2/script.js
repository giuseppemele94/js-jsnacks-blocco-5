const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//for each 
// people.forEach((person) => {

//   console.log(person.name); 
// });



// indentazione : 'Paolo', 'Giulia', 'Marco'
//uso map 
const nomiFormattati = people.map((person) => {

  return `'${person.name}'`;

});

//unisco tutti i nomi in un'unica stringa separata da virgole 
const result = nomiFormattati.join(', ');

console.log(result); 