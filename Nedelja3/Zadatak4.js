function picaZauvek(brojPica, godine){
    
    let picaDoKrajaZivota = (100 - godine) * (brojPica * 12)
    return picaDoKrajaZivota;
}
console.log(picaZauvek(5,26))
