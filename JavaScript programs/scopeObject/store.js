function storeData() {
    let name = document.getElementById("name").value
    sessionStorage.setItem("obj1",name);
    localStorage.setItem("obj2",name);
    alert("data stored in scope object")
}