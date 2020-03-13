import {Student} from './Student.mjs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Name: ', (name) => {
rl.question('Matric No: ', (matricNo) => {
rl.question('Major: ', (major) => {

rl.close();
// studentInfo();

let student = new Student();
student.name = name;
student.matricNo = matricNo;
student.major = major;

display = () => {
    console.log(`Student Name : ${name}`);
    console.log(`Student Matric No : ${matricNo}`);
    console.log(`Student Major : ${major}`);
};
    
// function studentInfo () {
//     console.log(`Student Name : ${name}`);
//     console.log(`Student Matric No : ${matricNo}`);
//     console.log(`Student Major : ${major}`);
// }

});
});
});

