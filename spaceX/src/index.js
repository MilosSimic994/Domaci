
import {spaceInfo} from './header'

import { LaunchList } from './launch-list'

import {select} from './select'



const list = LaunchList()


let app = document.querySelector('#app')
let rak = document.querySelector('#rak')






app.append(spaceInfo(),select())

rak.append(list)





