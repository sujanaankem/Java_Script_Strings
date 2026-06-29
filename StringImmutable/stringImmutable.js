function onClickCheck(){
    debugger;
    let name = document.getElementById("txtName").value;
    console.log(`origional string: ${name}`);
    console.log(name[2]);
    name[2] = "r";
    console.log(`After changing first character ${name}`)
}