function readData() {
    //alert("event fired");
    var pTag = document.createElement("p");     // p tag object ready 
    var pTagContent = document.createTextNode("Welcome to DOM Operation");  // content ready 
    pTag.appendChild(pTagContent);      // now content added inside a p tag <p>Welcome to DOM Operation</p>
    //document.getElementsByTagName("div")[0].appendChild(pTag);  // now content added in div tag  
    //document.getElementsByTagName("body")[0].appendChild(pTag);
    document.getElementById("obj").appendChild(pTag);
}

function addEmpInfo() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var divTag = document.createElement("div");
    var divTagContent = document.createTextNode("Name "+name+" Age "+age);

    divTag.appendChild(divTagContent);
    if(age<=25){
        divTag.setAttribute("class","myFirstClass");        //<div class="myFirstClass"></div>
    }else if(age<=50){
        divTag.setAttribute("class","mySecondClass");
    }else {
        divTag.setAttribute("class","myThirdClass");
    }
    document.getElementsByTagName("body")[0].appendChild(divTag);
    document.getElementById("name").value=""
    document.getElementById("age").value=""
}


async function loadFakeData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table"); 
    tableTag.setAttribute("border","1");  
    tableTag.setAttribute("class","table table-primary");
    
    var firstRow = document.createElement("tr");
    
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("Title");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("Price");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);

    tableTag.appendChild(firstRow);

    for(i=0;i<data.length;i++){
    var secondRow = document.createElement("tr");
    
    var secondRowFirstColumn = document.createElement("td");
    var secondRowFirstColumnValue = document.createTextNode(data[i].title);
    secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

    var secondRowSecondColumn = document.createElement("td");
    var secondRowSecondColumnValue = document.createTextNode(data[i].price);
    secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

    secondRow.appendChild(secondRowFirstColumn);
    secondRow.appendChild(secondRowSecondColumn);

    tableTag.appendChild(secondRow);
    }
    document.getElementsByTagName("body")[0].appendChild(tableTag);
}


async function loadFakeDataWithImage(){
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    for(i=0;i<data.length;i++){
        var divTag = document.createElement("div");
        var imgTag = document.createElement("img");
        var imageDetails = document.createElement("span");
        var iamgeDetailsValue = document.createTextNode("Name "+data[i].title+" Price "+data[i].price);
        imageDetails.appendChild(iamgeDetailsValue);

        imgTag.setAttribute("src",data[i].image);
        imgTag.setAttribute("width","70px");
        imgTag.setAttribute("height","70px");
        divTag.setAttribute("class","myImageData");
        divTag.appendChild(imgTag);
        divTag.appendChild(imageDetails);
        document.getElementsByTagName("body")[0].appendChild(divTag);
    }
}









