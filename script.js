// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.


function runCallbacks(callbacks) {
    callbacks.forEach(callback => console.log(callback));
}
function firstCallback() {
  console.log("funzione 1")
}
function secondCallback() {
  console.log("funzione 2")
}

function thirdCallback() {
  console.log("funzione 3")
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);