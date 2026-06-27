function onClickSearch(){
    debugger;
    let file = document.getElementById("txtFile").value;
    if(file.endsWith("doc") || file.endsWith("pdf") || file.endsWith("docx")){
    document.getElementById("pResult").innerHTML = `${file} is a valid file.`;
    }else{
    document.getElementById("pResult").innerHTML = `${file} is an invalid file.`;  
    }
}