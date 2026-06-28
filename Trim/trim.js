function onClickName(){
    debugger;
    let name = document.getElementById("txtName").value;
    let trim = name.trim();
    let trimStart = name.trimStart();
    let trimEnd = name.trimEnd();
   document.getElementById("pTrimBefore").innerHTML ="Before applying Trim: " + name.length;
   document.getElementById("pTrimAfter").innerHTML = "After applying Trim: " + trim.length;
   document.getElementById("pTrimStart").innerHTML = "Trim Start: " + trimStart.length;
   document.getElementById("pTrimEnd").innerHTML = "Trim End: " + trimEnd.length;
}