//Make sure to check paths in import below
//import { addContentToDOM } from '../utils.js'

const html = `

<h2>Title</h2>
<!-- Add your HTML HERE -->
<button id></button>
`
function runJavaScript(/*add args if required*/) {
//Add your JavaScript here
}

let template
export function initAndGetPage(contentId /*additional args if required here*/) {
//if (template) {
//return addContentToDOM(contentId,template)
//}
template = document.createElement('div')
template.innerHTML = html
//Now the HTML is added to the DOM
addContentToDOM(contentId, template)
//So we can manipulate it with our JavaScript
runJavaScript(/*add args if required*/)
}