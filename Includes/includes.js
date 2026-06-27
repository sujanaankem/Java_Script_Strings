function onClickSearch(){
    debugger;
    let text = document.getElementById("txtInputText").value;
    let word = document.getElementById("txtSearch").value;
    let index = text.indexOf(word);
    if(text.includes(word)){
        document.getElementById("pResult").innerHTML = `The word <span style="color:red" "fontWeight:bold" "fontsize:20px"> ${word} </span>you searched is at ${index} `;
         
    }else{
         document.getElementById("pResult").innerHTML = `The word ${word} you searched is not available in text.`;
    }
}