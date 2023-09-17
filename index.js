import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import "https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.0/purify.min.js"

import { setActiveLink } from "./utils.js"


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
      "/about": () => contentDiv.innerText= "About",
      "/users": () => contentDiv.innerText = "Users",
      "/find-user": () => contentDiv.innerText = "Find User",
      "/navigate-programmatically": () => contentDiv.innerText = "Navigate Programmatically",
      "/show-match": () => contentDiv.innerText = "Show Match",
    })
    .notFound(() => contentDiv.innerText = "Not FOUND")
    .resolve()
});


window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
  alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
    + ' Column: ' + column + ' StackTrace: ' + errorObj);
}
