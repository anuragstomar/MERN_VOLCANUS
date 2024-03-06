 //promise has three stages----->>>>>
 //1) pending state.
 //2) fulfill-> resolve -> .then()
 //2) reject-> reject -> .catch()


 //example--->>>>
 let gourav =100;
 let ashish = 1000;
 const p = new promise ((resolve,reject) => { 
    let rupess = gourav - ashish;
    if (ashish > rupess){
        //resolve("thik h bhai deta hu");
        resolve({
            gourav,
            data: "bhai mai tere liye hamesha khada hu tu bas bol de",
        });
    }else{
        reject("this is my backup plan");
    }
 });
 p.then((msg)=> msg.gourav + 500000)
 .then((data)=> console.log(data))
 .catch((msg)=> console.log(msg));