const Launch =(el)=>{
    let {
        ship_name,
        ship_type,
        active,
        image
    } = el

    const div = document.createElement('div')
    div.className = 'misa'
    let name = document.createElement('p')
    name.innerText = ship_name

    let activ = document.createElement('p')
    activ.innerText = active

    let type = document.createElement('p')
    type.innerText = ship_type

    let img = document.createElement('img')
    img.src = image
     div.append(img,name,type,activ)

     return div
}

export {Launch}