function onClickSearch() {
    debugger;
    let url = document.getElementById("txtUrl").value;
    if (url.startsWith("http") || url.startsWith("https")) {
        document.getElementById("pResult").innerHTML = `${url} is a valid url.`;
    } else {
        document.getElementById("pResult").innerHTML = `${url} is an invalid url.`;
    }
}