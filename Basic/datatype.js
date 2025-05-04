let student = {
    fullName : 'M Asif',
    age : 21,
    cgpa : 3.2
}
console.log(student);
console.log(typeof(student));

console.log(student.cgpa)
student['age'] = 23;
console.log(student)

student['age'] = student['age'] +1;
console.log(student)

