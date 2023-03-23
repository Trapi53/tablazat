export function rendezesSzoveg(lista) {
  lista.sort();
}

export function rendezesSzam(lista) {
  lista.sort(function (x, y) {
    return x - y;
  });
}

export function veletlenSorrend(lista) {
  lista.sort(function (a, b) {
    return Math.random() * 20 - 10; 
  });
}

function rendezesSzamSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    return a[kulcs] - b[kulcs];
  });
}

function rendezesSzovegSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    if (a[kulcs] - b[kulcs]) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function rendezesObjektum(lista, kulcs) {
  if (typeof kulcs == "number") {
    rendezesSzamSzerint(lista, kulcs);
  } else {
    rendezesSzovegSzerint(lista, kulcs);
  }
}
