import { Grossefonction as api } from "./api.js";

api().then((res) => {
    console.log(res)
    for (const element of res) {
        console.log(element)
        let body = document.getElementById('tbody')
        let rowName = document.createElement('tr')
        let Img = document.createElement('img')
        Img.innerHTML = el
        rowName.innerHTML = element.name
        body.appendChild(rowName)
    }
})
//console.log(popo)

