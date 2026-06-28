function onClickCharacterByIndex(){
    debugger;
    let name = document.getElementById("txtName").value;
    let index = document.getElementById("txtIndex").value;
    let result = document.getElementById("pResult");
    result.innerHTML = name[index];
}