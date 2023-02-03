function readData(){
   // alert("Event generated...")
   // to read value using name attribute name attribute can be duplicate 
   // two textfield or any other tags can contains same name.  
//    var fname = document.getElementsByName("fullname")[0].value;
//    var lname = document.getElementsByName("fullname")[1].value;
//    var fullname = fname+" "+lname;
//    alert("Welcome user "+fullname);

    // read the value using id attriute 
    // id must be unique. 
    var fname = document.getElementById("fname").value;
    var lname  = document.getElementById("lname").value;
    var fullname = fname+" "+lname;
    //alert("Welome user "+fullname);
    document.getElementById("result").value=fullname;
    document.getElementById("fname").value=""
    document.getElementById("lname").value=""

    var h2Value = document.getElementsByTagName("h2")[0].innerHTML;
    //document.getElementsByClassName("myDiv")[0].innerHTML=h2Value;
    document.getElementsByTagName("div")[0].innerHTML=h2Value;
   // alert(h2Value);
}