import { Grossefonction as api } from "./api.js";
const tableau = document.getElementById('tableau')
    api().then((res) => {
    console.log(res)
    for (const element of res) {
        console.log(element)
        tableau.innerHTML += element.name
    }
})
//console.log(popo)

