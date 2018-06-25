if(!navigator.serviceWorker){
   console.log("no");
}else{
    navigator.serviceWorker.register('sw/index.js').then((registration)=> {
        console.log('Service worker registration succeeded:', registration);
      }).catch((error) =>{
        console.log('Service worker registration failed:', error);
      });
    console.log("yes");
}

