const szamok=[1, 2, 3, 4, 5]
const dupla=szamok.map(szam=> szam*2)
console.log(dupla)


const szamok2 = [1, 2, 3, 4, 5, 6];
const negyzet=szamok2.map(szam=>szam*szam)
console.log(negyzet)


const nevek = ["anna", "béla", "cecília", "dávid"];
const nagybetu= nevek.map(nev=> nev[0].toUpperCase()+nev.slice(1))
console.log(nagybetu)

const celsiusFokok = [0, 10, 20, 30, 100];
const fahrenheit= celsiusFokok.map(celsius=>celsius* 9/5 + 32)
console.log(fahrenheit)

const diakok = [
  { nev: "Kovács Péter", jegy: 4 },
  { nev: "Nagy Anna", jegy: 5 },
  { nev: "Szabó Bence", jegy: 3 }
];
const diakokNeve = diakok.map(diak=>diak.nev)
console.log(diakokNeve)


const termekek = [
  { nev: "Kenyér", ar: 500 },
  { nev: "Tej", ar: 350 },
  { nev: "Sajt", ar: 1200 }
];
termekek2=termekek.map(termek=>({nev: termek.nev, netto: termek.ar, brutto: termek.ar*1.27}))
console.log(termekek2);

const gyumolcsok = ["alma", "körte", "szilva"];
const sorszamozott=gyumolcsok.map((gyumolcs, index)=> (index+1)+ ". "+gyumolcs)
console.log(sorszamozott);

const szamok3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const paros_kob=szamok3.filter(szam=> szam%2==0).map(szam => szam**3)
console.log(paros_kob)


const matrix = [[1, 2], [3, 4], [5, 6]];
const osszegek=matrix.map(tomb=> tomb[0]+tomb[1])
console.log(osszegek);

const szamok4 = [1, 2, 3];
const eredmeny = szamok4.map(szam => szam * 2);