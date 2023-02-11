export async function getParseObj(action) {
    let file = {}
    await fetch(`http://localhost:3000/${action}`)
    .then(data => data.json())
    .then(res => {file = res
    console.log(res)
    })
    return file
}