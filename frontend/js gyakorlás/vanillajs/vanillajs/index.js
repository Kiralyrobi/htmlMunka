const content = [
  [
    "Baliga József",
    "Feke Gergő",
    "Gyebnár Róbert",
    "Magyar Dárius",
    "Mező Lívia",
    "Szabó Bence Dávid",
    "Vida Dominik Csvidad Nyidad"

  ],
  [
    "Barna János Lőrinc",
    "Bánszki László Attila Zoltán Kohen Zollern",
    "Czigla Dániel",
    "Kiss Dzsenifer",
    "Papp Nóra",
    "Rácz Szabolcs",
    "Rostás Evelin Ildikó",
    "Solymosi Pista",
    "Székács Szabolcs Milán SINTÉR",
    "Szekeres Zsolt Bence",
    "Vadász Dániel"
  ],

];

const btnWhyReact = document.getElementById("btn-szoftver");
const btnCoreFeature = document.getElementById("btn-rendszer");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = ""; // clear existing content
  list.innerHTML = listContent; // insert new content
  tabContent.append(list);
}

function highlightButton(btn) {
  // Clear all existing styling / highlights
  btnWhyReact.className = "";
  btnCoreFeature.className = "";
  btn.className = "active"; // set new style / highlight
}

function handleClick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);
  if (btnId === "btn-szoftver") {
    displayContent(content[0]);
  } else if (btnId === "btn-rendszer") {
    displayContent(content[1]);
}
} 

displayContent(content[0]); // initially show this content

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
