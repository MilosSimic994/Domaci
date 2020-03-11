import {getLaunch} from './servis'
import {Launch} from  './lounch'

const LaunchList = ()=>{
    const div = document.createElement('div')
    div.className ='launch-list'
     
    getLaunch().then(res =>{
        let {data} =res

        data.forEach(element => {
            div.appendChild(Launch(element))
        });
    })

    return div
}

export {LaunchList}