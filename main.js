import { Grossefonction as api } from "./api.js";
const tableau = document.getElementById('tbody')
let data
let tabdata = [`name`,`appearance.gender`,`appearance.race`,`appearance.weight[0]`]

api().then((res) => {
    data = res
    data.forEach(element => {
        console.log(element)
        let row = document.createElement('tr')
        console.log(tabdata[0])
        for (let index = 0; index < 4; index++) {
            let ele = document.createElement('td')
            let text3 = document.createTextNode(`${elementabdata[index]}`)
            ele.appendChild(text3)
            row.appendChild(ele)
        }
        tableau.appendChild(row)
    });



})