let bulbasaur = {
    ime: 'Bulbasaur',
    vrsta: 'biljni',
    sposobnosti: ['otrovni brsljen','vezivanje protivnika'],
    karakteristike: {napad: 70, odbrana: 50, brzina: 20},
    img: 'bulbasaur.jpg'
}

let cikorita = {
    ime: 'Cikorita',
    vrsta: 'biljni',
    sposobnosti: ['list ostrica','vezivanje protivnika'],
    karakteristike: {napad: 60, odbrana: 30, brzina: 40},
    img: 'Chikorita.jpg'
}
let pidzit = {
    ime: 'Pidzit',
    vrsta: 'leteci',
    sposobnosti: ['uspavljujuca kugla','teleport'],
    karakteristike: {napad: 80, odbrana: 50, brzina: 80},
    img: 'pidgey.jpg'
}
let ponita = {
    ime: 'Ponita',
    vrsta: 'vatreni',
    sposobnosti: ['vatrene kugle','vatreni zid'],
    karakteristike: {napad: 75, odbrana: 60, brzina: 75},
    img: 'ponita.jpg'
}



let prikaziSve = document.querySelector('#prikazi');
let prikaziNajjaceg = document.querySelector('#prikazi-najjaceg')
let wrap = document.querySelector('.wrapper')
let app = document.querySelector('#app')





// let pok1 = document.createElement('div')
// app.appendChild(pok1)


prikaziSve.addEventListener('click', ubaciPok)
prikaziNajjaceg.addEventListener('click', najjaci)

function ubaciPok() {
    let sviPokemoi = [bulbasaur,cikorita,pidzit,ponita]
    for(el of sviPokemoi){
        let pok = document.createElement('div')
        let img = document.createElement('img')
        img.src = el.img
        app.appendChild(pok)
        pok.appendChild(img)

        pok.innerHTML += `${el.ime}`
        
    }
}

// function ubaciNajjaceg(sviPokemoi) {
    
// }
let sviPokemoi = [bulbasaur,cikorita,pidzit,ponita]

function najjaci(){
    let najjaci = sviPokemoi[0];
    

    
    sviPokemoi.forEach(el =>{
        if (el.karakteristike.napad > najjaci.karakteristike.napad)
        {najjaci = el;}
        return najjaci
    });
    let pokn = document.createElement('div')
    let imgn = document.createElement('img')
    imgn.src = najjaci.img
        app.appendChild(pokn)
        pokn.appendChild(imgn)
    
        pokn.innerHTML += najjaci.ime
        
}
