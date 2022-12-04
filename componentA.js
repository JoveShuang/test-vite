import componentACss from './componentA.module.css'
import componentALess from './index.module.less'

console.log("componentACss", componentACss)

const div = document.createElement('div')
const div1 = document.createElement('div')

document.body.appendChild(div)

div.className = componentALess.content
div.appendChild(div1)
div1.className = componentALess.main
