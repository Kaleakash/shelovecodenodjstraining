async function loadData() {

try{
var res = await fetch("https://jsonplaceholder.typicode.com/todo") 
var result = await res.json();
console.log(result)
}catch(ex){
    console.log(ex)
}

}
    
    loadData();