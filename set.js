const animalSet = new Set();


animalSet.add('Lion');
animalSet.add('Elephant');
animalSet.add('Tiger');
animalSet.add('Lion'); // Thêm "Lion" lần nữa, nhưng Set chỉ chứa các phần tử duy nhất

console.log(animalSet.size); // In ra: 3

console.log(animalSet.has('Elephant')); // In ra: true

animalSet.delete('Tiger');

animalSet.forEach((animal) => {
    console.log(animal);
});