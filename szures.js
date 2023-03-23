export function szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel) {
    const eredmenyLista = OBJEKTUMLISTA.filter(function (kutya) {
        console.log(kutya);
        return kutya.név.toUpperCase().includes(szuresiFeltetel.toUpperCase());
    });

    console.log(eredmenyLista);
    return eredmenyLista
};
export function szurKorSzerint(OBJEKTUMLISTA, szuresiFeltetelSZ) {
    const eredmenyLista = OBJEKTUMLISTA.filter(function (kutya) {
        console.log(szuresiFeltetelSZ);
        return eval(kutya.kor + szuresiFeltetelSZ);
    });

    return eredmenyLista
};
