import { Grossefonction as api } from "./api.js";
const tableau = document.getElementById('tbody')
const suivant = document.getElementById('suivant')

suivant.onclick = Next()
let data 

   
    api().then((res) => {
    
    data = res
    
    
    data.forEach(element => {
        let tabdata = [`${element.name}`,`${element.biography.fullName}`,`${element.appearance.gender}`,`${element.appearance.race}`,`${element.appearance.weight[0]}`,`${element.appearance.height[0]}`,`${element.powerstats}`,`${element.biography.placeOfBirth}`,`${element.biography.alignment}`]
        let row = document.createElement('tr')
        console.log(data)
        for (let index = 0; index < tabdata.length; index++) {
            let ele = document.createElement('td')
            let text3 = document.createTextNode(`${tabdata[index]}`)
            ele.appendChild(text3)
            row.appendChild(ele)
        }
        tableau.appendChild(row)
    });



})

function Next(){
    
}