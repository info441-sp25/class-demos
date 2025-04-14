async function getPterosaurs(){
    let response = await fetch("api/getPterosaurs")
    let dataJson = await response.json()

    let pterosaurHtml = dataJson.map(item => {
        return `
        <div>
            <p>${item.Genus}</p>
            <img src=${item.img} />
        </div>`
    }).join("")

    document.getElementById("results").innerHTML = pterosaurHtml
}