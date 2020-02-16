let niz1 = [2,45,65,76,78,54,32,21,3,246,77,645,43,55,20];

function deljivi(niz1) {
    //let niz2= []
    for(element of niz1){
        if(element % 5 == 0){
            // niz2.push(element);
            console.log(element);
        }
    }
    // return niz2;
}

console.log(deljivi(niz1));

//Moze li mala pomoc, zasto u ovom primeru gde samo ispisujem brojeve koji su deljivi prikazuje UNDEFINED kao poslednju vrednost?