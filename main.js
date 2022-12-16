document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const pupilRecord = document.querySelector('input').value
    try{
        const response = await fetch(`https://drab-pear-dove-kilt.cyclic.app/api/${pupilRecord}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthLocation
    }catch(error){
        console.log(error)
    }
}