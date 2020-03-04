import {info} from "../services/spacex_service"

const spaceInfo =() =>{

    let title = document.createElement('p')
    title.className = 'title'
    title.style.color = 'white'
    let paragraf = document.createElement('p')
    paragraf.className = 'parag'
    let div = document.createElement('div')
    

    info().then(response =>{
        console.log(response);
        let parag = response.data.summary
        let name = response.data.name
        title.innerHTML = name
        paragraf.innerText = parag
        div.append(title,paragraf)
        
    })

   return div
}


export default spaceInfo
