export async function getParseObj() {
    let file = {}
    await fetch('http://localhost:3000/buy')
    .then(data => data.json())
    .then(res => file = res)
    console.log(file)
    return file
}