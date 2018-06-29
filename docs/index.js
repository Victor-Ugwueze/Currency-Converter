if(!navigator.serviceWorker){
   console.log("no");
}else{
    navigator.serviceWorker.register('sw.js').then((registration)=> {
        // console.log('Service worker registration succeeded:', registration.scope);
      }).catch((error) =>{
        console.log('Service worker registration failed:', error);
      });
}

const fromCurrency = document.querySelector("#currency-from");
const toCurrency = document.querySelector("#currency-to");

const weba = fetch("https://free.currencyconverterapi.com/api/v5/currencies")
.then(response => response.json())
.then(data => {
     const currency = data.currencyName;
  for(let key in data.results){
      fromCurrency.innerHTML += `<option value="${key}">${key}</option>`;
      toCurrency.innerHTML += `<option value="${key}">${key}</option>`;
  }
})
