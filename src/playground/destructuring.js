console.log('destructuring')

// const person = {
//     name: 'David',
//     age: 64,
//     location: {
//         city: 'Berkeley',
//         temp: 60
//     }
// }

// // use name and age variable
// // old way:
// // const name = person.name;
// // const age = person.age
// // new way:

// const {name, age} = person;

// console.log(`${name} is ${age}`)

// // old: console.log(`It's ${person.location.temp} in ${person.location.city}`)

// // new

// const {temp : temperature, city} = person.location

// console.log(`It's ${temp} in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); // if no pub, Self-Published

// Array destructuring

const address = ['1228 Oxford Street', 'Berkeley', 'California', '94709'];

console.log(`You are in ${address[1]}, ${address[2]}.`)

// better: By position
//const [street, city, state, zip] = address

//console.log(`You are in ${city}, ${state}.`)

// you can leave off positions:

const [,city,state] = address

console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$2.59', '$2.75']

const [coffee,,mediumPrice] = item
console.log(`A medium ${coffee} costs ${mediumPrice}`)