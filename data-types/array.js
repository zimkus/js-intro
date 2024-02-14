/*
ARRAY - sarasas, masyvas, listas, zodynas, matrica, arejas
*/

const empty = [];
console.log(empty);
const marks = [10, 2, 5, 8];
console.log(marks);

console.log('Pazymiu kiekis:', marks.length);
console.log(marks[1], marks[90]);
console.clear();
function marksAverage(marks) {
    //validacijos

    //logika
    let total = 0;
    let x = 0;
    const count = marks.length;
    let result = total / count;
    if (x !== count) {
        total += marks[x];
        x++;
    }

    //rezultato validacija
    else if (x > count) {
        result = total / count;
        return result;
    }
    //rezultato grazinimas

}
console.log(marksAverage([10, 10, 10]), '->', 6);

//Duodamas vardas ir pavarde .
//Grazinti trumpini (inicialai).

// pvz.: Chuck Norris -> C.N 