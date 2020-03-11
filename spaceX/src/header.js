import {getInfo} from './servis'

const spaceInfo =() =>{

    let title = document.createElement('h1')
    title.className = 'title'
    
    let paragraf = document.createElement('p')
    paragraf.className = 'parag'
    let parF = document.createElement('p')
    let div = document.createElement('div')
    
    

    getInfo().then(response =>{
        console.log(response);
        let parag = response.data.founder
        let name = response.data.name
        let founded = response.data.founded
        title.innerHTML = name
        paragraf.innerText = parag
        parF.innerText = founded
        div.append(title,parag, founded)
        
    })

   return div
}

export { spaceInfo}