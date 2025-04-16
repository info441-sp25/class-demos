async function getUsers(){
    let response = await fetch("api/getUsers")
    let dataJson = await response.json()

    document.getElementById("results").innerHTML = JSON.stringify(dataJson)
}

async function createUser(){
    // data from html
    let first_name = document.getElementById("first_name_input").value
    let last_name = document.getElementById("last_name_input").value
    let favorite_ice_cream = document.getElementById("favorite_ice_cream_input").value

    let myData = {
        first_name: first_name,
        last_name: last_name,
        favorite_ice_cream: favorite_ice_cream
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