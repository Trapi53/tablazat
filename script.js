import { SZAMLISTA, SZOVEGLISTA, OBJEKTUMLISTA } from "./adat.js";
import { szurNevSzerint, szurKorSzerint } from "./szures.js";
import { rendezesObjektum, rendezesSzam, rendezesSzoveg, veletlenSorrend } from "./rendezes.js";
//import { tablazat } from "./tablazatos.js"

$(function () {
  tablazat(OBJEKTUMLISTA);
  /*console.log(SZOVEGLISTA);
  rendezesSzoveg(SZOVEGLISTA); 
  console.log(SZOVEGLISTA);
  console.log("***************");

  console.log(SZAMLISTA);
  rendezesSzoveg(SZAMLISTA);
  console.log(SZAMLISTA);
  console.log("***************");

  console.log(SZAMLISTA);
  veletlenSorrend(SZAMLISTA);
  console.log(SZAMLISTA)
  console.log("***************");


  console.log(SZOVEGLISTA);
  (veletlenSorrend(SZOVEGLISTA));
  console.log(SZOVEGLISTA);
  console.log("***************");

  //KORszerint növekvő sorrendbe
  console.log(OBJEKTUMLISTA);
  rendezesObjektum(OBJEKTUMLISTA, "kor");
  console.log(OBJEKTUMLISTA);
  //szűr NÉV
  rendezesObjektum(OBJEKTUMLISTA, "nev")
  console.log(OBJEKTUMLISTA);
  console.log("szűrés után");
  let szuresiFeltetel = "d";
  const szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel)
  console.log(szurtLista);
  //szűr KOR
  rendezesObjektum(OBJEKTUMLISTA, "kor");
  console.log(OBJEKTUMLISTA);
  console.log("szűrés után 2.0");
  let szuresiFeltetelSZ = "<= 18";
  const szurtListaSZ = szurKorSzerint(OBJEKTUMLISTA, szuresiFeltetelSZ)
  console.log(szurtListaSZ);
  //szűr INPUT
  const nevElem = $("#nev")
  console.log("szűrés után 3.0");
  nevElem.on("keyup", function () {
    let szuresiFeltetelI = nevElem.val()
    const szurtListaI = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetelI)
    console.log(szurtListaI);
  });*/
});

function tablazat(lista) {
  let txt = "div class = 'table-responsive'>";
  txt += "<table class = 'table; .table-stripe; .table-bordered; .table-hover'";
  txt += ` <tr class='table-dark'></tr>`
  for (const key in kulcslista) {
      txt += `<th id="${key}"+${kulcsLista[key]}> ${element} </th>`;
  }
  for (let index = 0; index < lista.lengh; index++) {
      txt += `<tr>`
      const object = lista[index];
      for (const key in object) {
          const element = object[key];
          if (key == "nev") {
              txt += `<td> ${element} </td>`;
          } else {
              txt += `<td> ${element} </td>`;
          }
      }
  }
  txt += `<td><button class="torol" id="${index}">IKSZ</button></td>`
  txt += "</tr>"

  txt += `</table>`
  console.log(txt);
  return txt;
}
