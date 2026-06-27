function onClickLength(){
    debugger;
    let name = document.getElementById("txtLength").value;
    let length = name.length;
    document.getElementById("pResult").innerHTML = length;
}
function onClickWrite(){
    debugger;
    let text = document.getElementById("txtLengthLimit").value;
    let length = text.length;
    if(length > 100){
        alert("Maximum length exceeded!");
        text = text.substring(0,100);
        
        document.getElementById("txtLengthLimit").value = text;
        length = text.length;
    }
     document.getElementById("pResultLimit").innerHTML = `${length}/100`;
}