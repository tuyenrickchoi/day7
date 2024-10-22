const animalMap = new Map();


animalMap.set('Lion', 5);
animalMap.set('Elephant', 12);
animalMap.set('Tiger', 8);


console.log(animalMap.get('Elephant')); // In ra: 12


console.log(animalMap.has('Lion')); // In ra: true

animalMap.delete('Tiger');

console.log(animalMap.has('Tiger')); // In ra: false

animalMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});