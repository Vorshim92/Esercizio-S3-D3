const generateList = (inputText) => {
  // seleziono la UL su cui attaccherò tutto
  const ulList = document.getElementById("tasklist");
  //  creo nel DOM l'elemento li e gli do la classeCSS "liList" e dichiaro che il suo innerText sarà uguale al parametro che verrà inserito nella funzione quando richiama "inputText"
  const liList = document.createElement("li");
  liList.className = "liList";
  liList.innerText = inputText;
  //  creo nel DOM l'elemento div e gli do la classeCSS divList
  const divList = document.createElement("div");
  divList.className = "divList";
  //  creo nel DOM l'elemento li
  const checkList = document.createElement("input");
  checkList.setAttribute("type", "checkbox");
  const liBtn = document.createElement("button");
  liBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>`;
  liBtn.onclick = function (e) {
    console.log("button target", e.currentTarget);
    e.currentTarget.closest(".divList").remove();
  };
  divList.append(checkList, liList, liBtn);
  ulList.append(divList);
};

const btnList = document
  .getElementById("ButtonAdd")
  .addEventListener("click", function (e) {
    const inputText = document.getElementById("input-unico");
    const myData = inputText.value;

    if (!myData) {
      return;
    } else generateList(myData);
    inputText.value = "";
  });
// unicoInput.onchange = function () {
//     console.log("evento", e);
// }
// unicoInput.oninput = function () {
//     console.log("evento", e);
// }
// unicoInput.onkeyup = function () {
//   console.log("evento", e);
// };
