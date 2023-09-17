import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import "https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.0/purify.min.js"

import { setActiveLink } from "./utils.js"
import {initAndGetPage as notFoundPage} from "./pages/notFound.js"

window.addEventListener("load", async () => {
  
  let  router = new Navigo("/", { hash: true });
 
  window.router = router
  const contentDiv = document.getElementById("content")

  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })
    .on({
      //For simple "templates", you can just insert your HTML directly like below
      "/": () => document.getElementById("content").innerHTML =
        `<h2>Home</h2>
         <p>This is the content of the Home Route</p>
     `,
      "/about": () => contentDiv.innerHTML= "<div>About</div><div>########</div><div>########</div>",
      "/users": () => contentDiv.innerHTML= "<div>USERS</div><div>########</div><div>########</div>",
      "/find-user": () => contentDiv.innerHTML= "<div>FIND USER</div><div>########</div><div>########</div>",
      "/navigate-programmatically": () => contentDiv.innerText = "Navigate Programmatically",
      "/show-match": () => contentDiv.innerHTML= "<div>SHOW MATCH</div><div>########</div><div>########</div>",
    })
    .notFound(() => notFoundPage("content"))
    .resolve()
});


window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
  alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
    + ' Column: ' + column + ' StackTrace: ' + errorObj);
}
