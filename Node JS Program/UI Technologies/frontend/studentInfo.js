function storeStudentInfo(){
    var _idValue = document.getElementById("_id").value;
    var fnameValue = document.getElementById("first_name").value;
    var lnameValue = document.getElementById("last_name").value;
    var ageValue = document.getElementById("age").value;
    var classValue = document.getElementById("class").value;
    var gradeValue = document.getElementById("grade").value;
    var addressValue = document.getElementById("address").value;
    var student = {_id:_idValue,first_name:fnameValue,last_name:lnameValue,age:ageValue,class:classValue,grade:gradeValue,address:addressValue};
   // console.log(student);
    fetch("http://localhost:3000/api/students/storeStudent",{
        method:"post",
        body:JSON.stringify(student),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.text()).then(result=>{
        document.getElementById("msg").innerHTML=result;
        console.log(result); 
        //alert(result);   
    }).catch(error=>console.log(error));
    reset();
}






function reset() {
    document.getElementById("_id").value="";
    document.getElementById("first_name").value="";
    document.getElementById("last_name").value="";
    document.getElementById("age").value="";
    document.getElementById("class").value="";
    document.getElementById("grade").value="";
    document.getElementById("address").value="";
}