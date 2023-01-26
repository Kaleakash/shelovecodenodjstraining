// creating user defined promise 

let obj1 = new Promise((resolve,reject)=> {
    //resolve("Promise done1")
    reject("error generated")
    //resolve({id:100,name:"Ravi",age:21})
    
})

//obj1.then(result=>console.log("promise done")).catch(error=>console.log("error"))
obj1.then(result=>console.log(result)).catch(error=>console.log(error))



