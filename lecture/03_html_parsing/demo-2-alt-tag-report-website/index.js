async function auditUrl(){
    let inputUrl = document.getElementById("urlInput").value
    let response = await fetch("api/auditurl?url=" + inputUrl)
    let resultText = await response.text()

    document.getElementById("results").innerHTML = resultText;
}