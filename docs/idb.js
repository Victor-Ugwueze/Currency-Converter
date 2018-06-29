if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB");
    return;
}


const dbName = "the_name";

let request = indexedDB.open(dbName, 2);


request.onerror = (event)=>{

}

request.onupgradeneeded = (event)=>{
    let db = event.target.result;

    let currencyDb = db.createObjectStor('currency',1)
}
