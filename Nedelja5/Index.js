

let izbor = document.querySelector('#izbor');
let opis = document.querySelector('#svrha')
let iznos = document.querySelector('#iznos');
let potvrdiBtn = document.querySelector('#potvrdi');
let app = document.querySelector('#app')
let ispis = document.querySelector('#ispis')

let sviRashodi = []
let sviPrihodi = []
let izabrano = izbor.value
// let unos = iznos.target.value
let nUnos = 0
iznos.addEventListener('input', (e) => {
    nUnos = e.target.value;

    console.log(nUnos)
})
let txUnos = '';
opis.addEventListener('input', (e) => {
    txUnos = e.target.value
})


// let prihodi = 0;
// let rashodi = 0;
let suma = 0;
function stanje() {
    // let suma = 0;
    if (izbor.value == 'prihodi') {
        suma += parseInt(nUnos, 10)
    } else {
        suma -= nUnos
    }

    trenutnoStanje.innerText = suma

}


let trenutnoStanje = document.createElement('h1')
trenutnoStanje.innerHTML = suma
let trenutnoStanjeTxt = document.createElement('h1')
trenutnoStanjeTxt.innerText = 'TRENUTNO STANJE'
let trenutnoStanjeDiv = document.createElement('div')
trenutnoStanjeDiv.className = 'tr-stanje'

trenutnoStanjeDiv.appendChild(trenutnoStanjeTxt)
trenutnoStanjeDiv.appendChild(trenutnoStanje)

app.appendChild(trenutnoStanjeDiv)
//ispis prihoda ukupno
function ispisiPrihod() {

    let prihodi = {
        opis: txUnos,
        iznos: nUnos,
        id: counter
    }
    counter++
    sviPrihodi.push(prihodi)
    if (izbor.value == 'prihodi') {
        // let prihodiDiv = document.createElement('div')
        // prihodiDiv.className ='prihodi-div'
        let prihodiStavka = document.createElement('div')
        let prihodiOpis = document.createElement('p')
        prihodiOpis.innerText = prihodi.opis;
        let prihodiIznos = document.createElement('p')
        prihodiIznos.innerText = ` +${prihodi.iznos} RSD`
        let btnDel = document.createElement('button')
        btnDel.className = 'btn-del'
        btnDel.innerText = 'X'

        prihodiStavka.appendChild(prihodiOpis)
        prihodiStavka.appendChild(prihodiIznos)
        prihodiStavka.appendChild(btnDel)

        prihodiDiv.appendChild(prihodiStavka)
        // ispis.appendChild(prihodiDiv)

        prihodiStavka.addEventListener('mouseenter', () => {
            btnDel.style.display = 'block'
        })
        prihodiStavka.addEventListener('mouseleave', () => {
            btnDel.style.display = 'none'
        }
        )
        btnDel.addEventListener('click', () => {
            prihodiStavka.remove()
        })


    } else {
        return
    }
}
let counter = 0

//ispis rashoda ukupno
function ispisiRashod() {

    let rashodi = {
        opis: txUnos,
        iznos: nUnos,
        id: counter
    }
    counter++
    sviRashodi.push(rashodi)
    if (izbor.value == 'rashodi') {
        // let prihodiDiv = document.createElement('div')
        // prihodiDiv.className ='prihodi-div'
        let rashodiStavka = document.createElement('div')
        let rashodiOpis = document.createElement('p')
        rashodiOpis.innerText = rashodi.opis;
        let rashodiIznos = document.createElement('p')
        rashodiIznos.innerText = ` -${rashodi.iznos} RSD`
        let proc = document.createElement('p')
        proc.innerHTML = Math.ceil((rashodi.iznos / suma) * 100) + '%'

        let btnDel = document.createElement('button')
        btnDel.className = 'btn-del'
        btnDel.innerText = 'X'


        rashodiStavka.appendChild(rashodiOpis)
        rashodiStavka.appendChild(rashodiIznos)
        rashodiStavka.appendChild(proc)
        rashodiStavka.appendChild(btnDel)
        rashodiDiv.appendChild(rashodiStavka)
        // ispis.appendChild(rashodiDiv)

        rashodiStavka.addEventListener('mouseenter', () => {
            btnDel.style.display = 'block'
        })
        rashodiStavka.addEventListener('mouseleave', () => {
            btnDel.style.display = 'none'
        }
        )
        btnDel.addEventListener('click', () => {
            rashodiStavka.remove()
        })

    } else {
        return
    }
}

potvrdiBtn.addEventListener('click', () => {
    if (iznos.value.trim() == '' || izbor.value == '' || iznos.value <= 0) {
        alert('GRESKA')
        return
    }
    stanje()
    ispisiPrihod()
    ispisiRashod()
    prihodi()
    izbor.value = ''
    iznos.value = ''
    opis.value = ''

})

// rashodiStavka.addEventListener('onmouseover', ()=>{
//     btnDel.style,display = block
// })
let prihod = 0;
let rashod = 0
const prihodi = () => {

    if (izbor.value == 'prihodi') {
        prihod += parseInt(nUnos, 10)
    } else if (izbor.value == 'rashodi') {
        rashod += parseInt(nUnos, 10)
    }

    ispisPrihodiN.innerHTML = prihod


    ispisRashodiN.innerHTML = rashod

}
const btnDel = () => {

}

let stanjaDiv = document.createElement('div')
stanjaDiv.className = 'stanja'

let ispisPrihodi = document.createElement('div')
let ispisPrihodiN = document.createElement('h2')            //element koji koristis samo jednom kreiraj van funkcije
let ispisPrihodiTxt = document.createElement('h2')
ispisPrihodiTxt.innerText = 'Prihodi:'
ispisPrihodiN.innerHTML = prihod
ispisPrihodi.appendChild(ispisPrihodiTxt)
ispisPrihodi.appendChild(ispisPrihodiN)
stanjaDiv.appendChild(ispisPrihodi)

let ispisRashodi = document.createElement('div')
let ispisRashodiN = document.createElement('h2')
let ispisRashodiTxt = document.createElement('h2')
ispisRashodiTxt.innerText = 'Rashodi:'
ispisRashodiN.innerHTML = rashod
ispisRashodi.appendChild(ispisRashodiTxt)
ispisRashodi.appendChild(ispisRashodiN)
stanjaDiv.appendChild(ispisRashodi)
app.appendChild(stanjaDiv)
//ispis prihodi
let prihodiDiv = document.createElement('div')
prihodiDiv.className = 'prihodi-div'
ispis.appendChild(prihodiDiv)

let rashodiDiv = document.createElement('div')
rashodiDiv.className = 'rashodi-div'

ispis.appendChild(rashodiDiv)


