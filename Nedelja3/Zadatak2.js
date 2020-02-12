function pica(poluprecnik, cena) {
    P = 2 * poluprecnik * Math.PI

    return P / cena;
}

console.log(pica(32,600))