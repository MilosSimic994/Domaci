import {getLaunch} from './servis'
 import {Launch} from './lounch'
//  import {LaunchList} from './launch-list'


let raket = document.querySelector('#rak')
const select = ()=>{
    let sel = document.createElement('select')
  
    let izaberi = document.createElement('option')
    izaberi.innerText = 'izaberi'
    izaberi.value = 'izbor'
    let op1 = document.createElement('option')
    op1.value = 'true'
    op1.innerText = 'aktivan'
    let op2 = document.createElement('option')
    op2.value = 'false'
    op2.innerText = 'ne aktivan'

    sel.append(izaberi,op1,op2)


    sel.addEventListener('change', ()=>{

        raket.innerHTML = ''

        getLaunch().then(res =>{
            let sve = res.data
           
            
            let fil = sve.filter(element=> element.active.toString() == sel.value)
                    console.log(sel.value);
                    
            fil.forEach(element => {
                raket.appendChild(Launch(element), sel)
                console.log(fil);
                
            });
        })
    })

    return sel
}

export {select}