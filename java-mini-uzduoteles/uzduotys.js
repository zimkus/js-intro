// KINTAMUJU INICIJAVIMAS
//1.

const x1 = 4;
const x2 = -5;
const x3 = NaN;

console.log(x1);
console.log(x2);
console.log(x3);

console.clear();

//2.

const y1 = 'labas mano ';
const y2 = 'vardas ';
const y3 = 'Eimantas';

console.log(y1);
console.log(y2);
console.log(y3);

console.clear();

//3.

const z1 = [2, 4, 2.5, -24, Infinity]
const z2 = [-1, -2, -3, -4, NaN]
const z3 = [1, 2, 3, 2, 2]
console.log(z1,);
console.log(z2);
console.log(z3);

console.clear();

//4.

const p1 = ['a', 'b', 'c', 'd', 'e']
for (let i = 0; i < 5; i++) {
    console.log(p1[i]);
}
const p2 = ['labas', 'as', 'esu', 'Chuck', 'Norris'];
console.log(p2[0], p2[1], p2[2], p2[3], p2[4]);
const p3 = [':0', ':)', ":(", ":D", "xD"];
let k = 0;
while (k < 5) {
    console.log(p3[k]);
    k++;
}
console.log("-----------")

//VEIKSMAI SU KINTAMAISIAIS

//1.
const sum1 = x1 + x2 + x3;
console.log(sum1);
console.log('-------------------')
//2.
const sum2 = y1 + y2 + y3;
console.log(sum2);
//3.
const marks = [1, -2, 3, -4, 5];
let sum3 = 0;
for (let i = 0; i < marks.length; i++) {
    sum3 += marks[i];
}
console.log(sum3);
console.clear();

// let student1 = 'joNas';
// let student1 = 'joNas'.split('').join(' ');
// console.log(normalName('joNas'));
// console.log(student1.slice(1).toLowerCase());
// let name = student1.at(0).toUpperCase() + student1.slice(1).toLowerCase();
// console.log(name.replaceAll(' ', ''))
// console.log(name);
let student1 = 'PeTrAs';
console.log(normalName(student1));
function normalName(student1) {
    student1.split('').join(' ');
    student1.slice(1).toLowerCase();
    let name = student1.at(0).toUpperCase() + student1.slice(1).toLowerCase();
    name.replaceAll(' ', '');


    return name;

}
console.clear();

// 
let nameSurname = 'Chuck Norris';
console.log(nameSurname.split('+'));
console.log(nameSurname.at(' '));
console.clear();

function greet() {
    return "hello world!";
}

