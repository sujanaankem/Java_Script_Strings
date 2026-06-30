let letterA = "";
let letterB = "";
let letterC = "";
let letterD = "";
let letterOthers = "";
function onClickArrange() {
    debugger;
    let word = document.getElementById("txtStartsWith").value;
    if (word.startsWith("a")) {
        if (letterA == "") {
            letterA += "";
        } else {
            letterA += ", ";
        }
        letterA += word;
        document.getElementById("wordA").innerHTML = `Words starts with A: ${letterA}`;
    }
    if (word.startsWith("b")) {
        if (letterB == "") {
            letterB += "";
        } else {
            letterB += ", ";
        }
        letterB += word;
        document.getElementById("wordB").innerHTML = `Words starts with B: ${letterB}`;
    }
    if (word.startsWith("c")){
        if (letterC == ""){
            letterC += "";
        }else{
            letterC += ", "
        }
        letterC += word;
        document.getElementById("wordC").innerHTML = `Words starts with C: ${letterC}`;
    }
    if (word.startsWith("d")){
        if (letterD == ""){
            letterD += "";
        }else{
           letterD += ", "; 
        }
        letterD += word;
         document.getElementById("wordD").innerHTML = `Words starts with D: ${letterD}`;
    }
    else{
        if (letterOthers == ""){
            letterOthers += "";
        }else{
            letterOthers += ", ";
        }
        letterOthers += word;
        document.getElementById("wordOthers").innerHTML = `words starts with remaining alphabets: ${letterOthers}`
    }
}