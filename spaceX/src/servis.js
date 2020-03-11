import axios from 'axios'


const getInfo= ()=>{
    return axios.get('https://api.spacexdata.com/v3/info')
}

const getLaunch= ()=>{
    return axios.get('https://api.spacexdata.com/v3/ships')
}


export {getInfo, getLaunch}