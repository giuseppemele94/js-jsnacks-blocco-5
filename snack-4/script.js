const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

//versione con map
const authorName = posts.map((post)=> {
  return `'${post.author}'`; 
}); 

console.log(authorName); 

//versione map compatta 
// const autori = posts.map(post => post.author);
// console.log(autori); 


//versione for classico 
// const authorName = [];
// for (let i = 0; i < posts.length; i++) {
//   const nameAuthor = posts[i].author;
//   authorName.push(nameAuthor); 
  
// }
// console.log(authorName); 
