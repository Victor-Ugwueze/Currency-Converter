if(!navigator.serviceWorker){
   console.log("no");
}else{
    navigator.serviceWorker.register('sw/index.js').then((registration)=> {
        console.log('Service worker registration succeeded:', registration);
      }).catch((error) =>{
        console.log('Service worker registration failed:', error);
      });
}

const fromCurrency = document.querySelector("#currency-from");
const toCurrency = document.querySelector("#currency-to");

const weba = fetch("https://free.currencyconverterapi.com/api/v5/currencies")
.then(response => response.json())
.then(data => {
    console.log(data.results);
     const currency = data.currencyName;
  for(let key in data.results){
      fromCurrency.innerHTML += `<option value="${key}">${key}</option>`;
      toCurrency.innerHTML += `<option value="${key}">${key}</option>`;
  }
})
