function onClickCheck() {
    debugger;
    let name = document.getElementById("txtName").value;
    let indexOf = document.getElementById("txtIndexOf").value;
    let result = document.getElementById("pResult");
    result.innerHTML = "IndexOf: " + name.indexOf(indexOf);
}
function onClickLast() {
    debugger;
    let name = document.getElementById("txtName").value;
    let indexOf = document.getElementById("txtIndexOf").value;
    let last = document.getElementById("pLast");
    last.innerHTML = "Last indexOf:" + name.lastIndexOf(indexOf);
}