/*
IF - reiksmiu palyginimas

 SABLONAI"
 if () {}
 if (){} else {}
 if () { } else if (){}

 PALYGINIMO OPERATORIAI:
 -visi: >,<,>=, <=, ==, ===,!=, !==
-naudotini:>,<,>=,<=,===,!==
-nenaudotini; ==, !=

*/

const amzius = 18;
const profesija = 'Programuotojas';
const amziausLimitas = 21;
console.log("START");
if (amzius >= amziausLimitas) {
    console.log("Ko noresi?")
}
else {
    console.log("sry... ");
}
let msg = profesija + 'ieina i bara'
if (amzius >= amziausLimitas) {
    msg = "Tai ko noresi uzsisakyti?"
}
else {
    msg = profesija + "... Tu gi vis vien neturi pinigu... ";
}
console.log(msg);


console.log("END");

console.clear();
let win = "95";
let msgWin = "Tu neturi windowsu ??? xD";
if (win == "95") {
    msgWin = "Windows 95";
}
else if (win === "98") {
    msgWin = "Windows 98";
}
else if (win === "xp") {
    msgWin = "Windows XP";
}
else if (win === "vista") {
    msgWin = "Windows Vista";
}
else if (win === "10") {
    msgWin = "Windows 10";
}
else {
    msgWin = "Neatpazinta OS...";
}
console.log(msgWin);

console.clear();


console.clear();
// Code nesting 

const diena = 1;
//iki 11val- pusryciu meniu
//iki 16val-dienos meniu
//po 16val- vakaro meniu
const laikas = 12;

if (diena === 1) {
    console.log("Pirmadienio meniu");
}
else {
    console.log("Standartinis meniu");
}