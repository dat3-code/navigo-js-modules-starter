### Navigo Router with Views made with JavaScript modules

If you are using vs-code as you editor, I suggest you install the following plugins 

- Template Literal Editor
- es6-string-html

I also recommend that you install this snippet
- select File -> Preferences -> Configure User Snippets
- Select "New Global Snippet File"
- Give it the name navigo
- Delete everything in the file and Copy/paste the content below into the snippet-file

TBD See video for a demonstration and argumentation for the above

```
{
	"Template for a navigo/js-modules View": {
	 	"scope": "javascript,typescript",
	 	"prefix": "navigo-template",
	 	"body": [
			"//Make sure to check paths in import below",
			"//import { addContentToDOM } from '../utils.js'",
			
			"",
			"const html = `",
			"",
			"<h2>${1:Title}</h2>",
			"<!-- Add your HTML HERE -->",
			"`",
			
			"function runJavaScript(/*add args if required*/) {",
				"//Add your JavaScript here",
			"}",
			"",
			"let template",
			"export function initAndGetPage(contentId /*additional args if required here*/) {",
				"//if (template) {",
					"//return addContentToDOM(contentId,template)",
				"//}",
				"template = document.createElement('div')",
				"template.innerHTML = html",
				"//Now the HTML is added to the DOM",
				"addContentToDOM(contentId, template)",
				"//So we can manipulate it with our JavaScript",
				"runJavaScript(/*add args if required*/)",
			"}"
	 	],
	 	"description": "Add boilerplate code for a navigo/js-modules View"
	 }
}
```
