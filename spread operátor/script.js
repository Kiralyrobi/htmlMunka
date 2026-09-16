const szamok = [5, 10, 15]; 
const szamok2 = [...szamok, 20];   
console.log(szamok2);


const napok = ["Kedd", "Szerda", "Csütörtök"];
const napok2 = ["Hétfő", ...napok];
console.log(napok2);


const elso = [1, 2, 3]; 
const masodik = [4, 5, 6];
const egybe = [...elso, ...masodik];
console.log(egybe);


const diak = {
  nev: "Anna",
  kor: 17};
const ujEletkor = { ...diak, kor: 18 };
console.log(ujEletkor);


const diak2 = {
  nev: "Anna",
  kor: 17};
const varos = { ...diak2, varos: "Szeged" };
console.log(varos);


const alap = {
  nev: "Bence",
  kor: 18};
const plusz = {
  iskola: "Technikum",
  osztaly: "11.A"};
const egyesitett = { ...alap, ...plusz };
console.log(egyesitett);


const elso1 = {
  nev: "Anna",
  kor: 17
};
const masodik2 = {
  kor: 18
};
const eredmeny = {
  ...elso1,
  ...masodik2
};
console.log(eredmeny);


const szamokmegint = [1, 2, 3];
const uj = [0, ...szamokmegint, 4];
console.log(uj);