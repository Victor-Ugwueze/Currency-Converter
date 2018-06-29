
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    const fromInput = form.querySelector('#currency-from option:checked').value;
    const toInput = form.querySelector('#currency-to option:checked').value;
    console.log(fromInput,toInput);
    
    convertCurrency(10,fromInput,toInput,(err,data)=>{
       if(err){
        console.log(err)
       }else{
        console.log(data)
       }
    })
})



function convertCurrency(amount, fromCurrency, toCurrency, callback) {

    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    const query = `${fromCurrency}_${toCurrency}`;
  
    const url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=ultra`;
  
   fetch(url)
   .then(response=>response.json())
   .then(data=>{
       if(data){
        callback(null,data);
       }else{
           const err = new Error(`Value not found for: ${query}`);
        callback(err);
       }
       
   })
      
    //     res.on('data', function(chunk){
    //         body += chunk;
    //     });
  
    //     res.on('end', function(){
    //         try {
    //           var jsonObj = JSON.parse(body);
  
    //           var val = jsonObj[query];
    //           if (val) {
    //             var total = val * amount;
    //             cb(null, Math.round(total * 100) / 100);
    //           } else {
    //             var err = new Error("Value not found for " + query);
    //             console.log(err);
    //             cb(err);
    //           }
    //         } catch(e) {
    //           console.log("Parse error: ", e);
    //           cb(e);
    //         }
    //     });
    // }).on('error', function(e){
    //       console.log("Got an error: ", e);
    //       cb(e);
    // });
  }
  

//   convertCurrency(10, 'USD', 'PHP', function(err, amount) {
//     console.log(amount);
//   });