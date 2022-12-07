import { count } from './counter.js';
import "./request.js";
import "./variable.css";
import "./index.css"
import "./componentA"
import "./componentB"
import "@/components/baseComponents/imageLoader"
import "@/components/baseComponents/svgLoader"

console.log("count")

fetch('/api/users', {
  method: 'post'
}).then(data => {
  console.log(data)
}).catch(error => {
  console.error(error)
})