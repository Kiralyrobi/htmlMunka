const szamok = [10, 20, 30];
const [a, b, c,]=szamok;
console.log(a, b, c)


const [elso,,,negyedik] = ["hétfő", "kedd", "szerda", "csütörtök", "péntek"];
console.log(elso, negyedik)


let x = 5;
let y = 10;
[x,y]=[y,x]
console.log(x, y)


const [elsoke,masodik="kék"] = ["piros"];
console.log(elsoke, masodik)

const[elsoJegy, ...tobbiJegy] = [5, 4, 3, 2, 5];
console.log(elsoJegy, tobbiJegy)


function minMax(tomb) {
  return [Math.min(...tomb), Math.max(...tomb)];
}
const szamokmegint = [4, 2, 9, 1, 7];
const[legkisebb, legnagyobb] = minMax(szamokmegint);
console.log(legkisebb, legnagyobb)


const diak = { neve: "Kiss Eszter", kor: 16, osztaly: "10.A" };
const {neve, kor} = diak;
console.log(neve, kor);


const termek = { id: 101, cim: "Notebook", keszlet: 15 };
const { cim: termeknev, keszlet: darabszam } = termek;
console.log(termeknev, darabszam)


const { neve1, szerep="felhasználó" }={neve1:"Tóth Gábor"};
console.log(neve1, szerep)


const auto = { marka: "Toyota", modell: "Corolla", ev: 2022, szin: "fehér" };
const { marka, ...tobbiAdat } = auto;
console.log(marka, tobbiAdat) 


const dolgozo = {
  nev: "Varga Kata",
  cim: {
  varos: "Debrecen",
  iranyitoszam: "4024"
  }
};  
const {nev, cim: {varos}} = dolgozo;
console.log(nev, varos)


function bemutatkozas({ nev, kor }) {
  console.log(`Szia, a nevem ${nev} és ${kor} éves vagyok.`);
}
bemutatkozas({ nev: "Farkas Dani", kor: 17, varos: "Szeged" });


const diakok = [
  { nev: "Anna", jegy: 5 },
  { nev: "Béla", jegy: 3 },
  { nev: "Cili", jegy: 4 }
];
const diakNevek = diakok.map(diak=>({ [diak.nev]: diak.jegy }));
console.log(diakNevek);

