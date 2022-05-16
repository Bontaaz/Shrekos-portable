const api = fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then(data => LoadData(data))


function LoadData(data){
    console.log(data)
}