const studentGrades = {
    John: 85,
    Anna: 92,
    Bob: 75
};

console.log(studentGrades['Anna']);

console.log('John' in studentGrades);

delete studentGrades['Bob'];

Object.entries(studentGrades).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
