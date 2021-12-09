// alert("Welcome to CV Builder, loading please wait!");
function addNewWEField(){
    // console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById('weAddbutton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("qeField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById('aqAddbutton');

   aqOb.insertBefore(newNode,aqAddButtonOb);
}