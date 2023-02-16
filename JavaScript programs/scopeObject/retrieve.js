function retreiveData() {
    let name1 = sessionStorage.getItem("obj1");
    let name2 = localStorage.getItem("obj2");
    alert("Value from session "+name1+" Value from local "+name2);
}