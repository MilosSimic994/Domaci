let bulbasaur = {
    ime: 'Bulbasaur',
    vrsta: 'biljni',
    sposobnosti: ['otrovni brsljen','vezivanje protivnika'],
    karakteristike: {napad: 70, odbrana: 50, brzina: 20}
}
let cikorita = {
    ime: 'Cikorita',
    vrsta: 'biljni',
    sposobnosti: ['list ostrica','vezivanje protivnika'],
    karakteristike: {napad: 60, odbrana: 30, brzina: 40}
}
let pidzit = {
    ime: 'Pidzit',
    vrsta: 'leteci',
    sposobnosti: ['uspavljujuca kugla','teleport'],
    karakteristike: {napad: 80, odbrana: 50, brzina: 80}
}
let ponita = {
    ime: 'Ponita',
    vrsta: 'vatreni',
    sposobnosti: ['vatrene kugle','vatreni zid'],
    karakteristike: {napad: 75, odbrana: 60, brzina: 75}
}

let sviPokemoi = [bulbasaur,cikorita,pidzit,ponita]




let sposobnosti = sviPokemoi.map(spos =>{
    return spos.sposobnosti
})

console.log(sposobnosti);




sviPokemoi.sort((a,b)=>{
    if(a.karakteristike.brzina > b.karakteristike.brzina){
        return 1
    }else if(a.karakteristike.brzina == b.karakteristike.brzina){
        return 0
    }else {
        return -4
    }
})
 console.log(sviPokemoi)

   

   function najjaci(sviPokemoi){
    let najjaci = sviPokemoi[0];
    
    sviPokemoi.forEach(el =>{
        if (el.karakteristike.napad > najjaci.karakteristike.napad)
        {najjaci = el;}
    });

    return najjaci;

}
console.log(najjaci(sviPokemoi));

