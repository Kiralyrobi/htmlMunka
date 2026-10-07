const szamok=[5, 10, 15];
const szamok2=[...szamok, 20];
console.log(szamok);

const tomb1=[1, 2, 3];
const ujTomb=[...tomb1];
console.log(ujTomb);
tomb1[0]=99;
console.log(tomb1);
console.log(ujTomb);