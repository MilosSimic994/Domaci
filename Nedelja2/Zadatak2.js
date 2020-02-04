let cena = 34;
let novcanik = 67;

if(cena > novcanik) {
    console.log('Nemate dovoljo novca' + '\n' + 'Trenutno stanje ' + novcanik);
}else {
    console.log('Uspesno ste kupili proizvod' + '\n' + 'Trenutno stanje ' + (novcanik - cena)); 
}