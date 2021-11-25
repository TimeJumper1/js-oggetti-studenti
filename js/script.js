// obhject studente
const student = {
    nome: 'mario',
    congnome: 'rossi',
    eta: 22
};
// console.log(student);
// stampa di tutti gli element dell'object
for (let key in student) {
    // console.log(key +': ' + student[key])
    
}
// array studenti

const arrayStudent =[
    {
        nome: 'pietro',
    congnome: 'verdi',
    eta: 21
    },
    {
        nome: 'peppe',
    congnome: 'bianchi',
    eta: 23
    },
];

arrayStudent.push(student);
console.log(arrayStudent);
// ciclo per vedere gli elementi dell'array di studenti
for (i = 0; i<arrayStudent.length ; i++){
    const insideArray = arrayStudent[i]
    for (let key in insideArray) {
        console.log(key +': ' + insideArray[key])
        
    }
}
// chidere le informazioni da mettere nell'object dell'utente
const userName = prompt('inserisci il tuo nome');
const userSurname = prompt('inserisci il tuo cognome');
const userAge = parseInt(prompt('inserisci la tua età'));

console.log(userName);
console.log(userSurname);
console.log(userAge);
// vreazione dell'object utente
const userObject ={
    nome: userName,
    congnome: userSurname,
    eta: userAge
}
// mettere l'object utente nel array di studenti
arrayStudent.push(userObject);

console.log(arrayStudent);
// per vedere tutti gli object dell'array studente incluso quello aggiunto dal ytente 
// scommentare il ciclo sotto la linea
// -------------------------------------------
// for (i = 0; i<arrayStudent.length ; i++){
//     const insideArray = arrayStudent[i]
//     for (let key in insideArray) {
//         console.log(key +': ' + insideArray[key])
        
//     }
// }