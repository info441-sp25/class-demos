function resolveAfterNSeconds(n){
    return new Promise(resolve => {
        setTimeout(() => {resolve("finished")}, 1000*n)
    })
}

async function testAwait(){
    console.log("about to await")
    await resolveAfterNSeconds(5)
    console.log("finished the 5 second wait")
}

testAwait()

async function testAwait2(){
    console.log("test2 about to await")
    await resolveAfterNSeconds(3)
    console.log("test2 finished the 3 second wait")
}

testAwait2()