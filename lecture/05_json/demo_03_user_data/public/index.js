// async function getPterosaurs(){
//     let response = await fetch("api/getPterosaurs")
//     let dataJson = await response.json()

//     let pterosaurHtml = dataJson.map(item => {
//         return `
//         <div>
//             <p>${item.Genus}</p>
//             <img src=${item.img} />
//         </div>`
//     }).join("")

//     document.getElementById("results").innerHTML = pterosaurHtml
// }

async function createUser(){
    // data from html
    let first_name = document.getElementById("first_name_input").value

    let myData = {
        first_name: first_name
    }
    // send the data to server as a "POST" request
    const response = await fetch('api/users', {
        method: "POST",
        body: JSON.stringify(myData),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}