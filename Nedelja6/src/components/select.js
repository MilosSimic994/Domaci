// import LaunchList from "./launch_list"
// import Launch from "./launch"
// import Launch from "./launch"

// import LaunchList from "./launch_list"

// import { getPastLaunches } from "../services/spacex_service"
let app = document.querySelector('#app')
app.style.color ='white'
app.style.textAlign = 'center' 
app.style.margin = '20px'
const select = () => {
    let select = document.createElement('select')
  
        for (let i = 2005; i < 2025; i++) {
            const opt = document.createElement('option')
            opt.value = i
            opt.innerText = i
            select.appendChild(opt)
        }


        select.addEventListener('change',() => {
            app.innerText = 'SERVER NIJE U FUNKCIJI, POKUSAJTE KASNIJE'
            app.style.fontSize = '32px'
           
           
        
            // if(selekt.value == "sve"){
            //     renderList(niz)
            //     return        
            // }
            // let filt = niz.filter((el) => el.godina == selekt.value)
            // renderList(filt)
        })
       return select
    
}

export { select }