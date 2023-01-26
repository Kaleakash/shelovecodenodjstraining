function loadData() {

fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(result=>console.log(result)).
catch(e=>console.log("Error generated"+e));

}

loadData();