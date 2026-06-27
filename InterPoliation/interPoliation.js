function onClickDone(){
    debugger;
    let name = document.getElementById("txtName").value;
    let age = Number(document.getElementById("txtAge").value);
    let city = document.getElementById("txtCity").value;
    let result = `My name is ${name}. i'm ${age} years old, and i'm from ${city}`;
    document.getElementById("pResult").innerHTML = result;
}