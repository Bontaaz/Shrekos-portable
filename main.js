import { Grossefonction as api } from "./api.js";
const tableau = document.getElementById('tbody')
const suivant = document.getElementById('suivant')

suivant.onclick = Next()
let data 
const input = document.getElementById('myInput')
api().then((res) => {
    data = res
    
    data.forEach(element => {
        let tabdata = [`${element.name}`,`${element.appearance.gender}`,`${element.appearance.race}`,`${element.appearance.weight[0]}`,`${element.appearance.height[0]}`,`${element.biography.placeOfBirth}`,`${element.biography.alignment}`,`${element.powerstats[0]}`]
        let row = document.createElement('tr')
        for (let index = 0; index < 8; index++) {
            let ele = document.createElement('td')
            let text3 = document.createTextNode(`${tabdata[index]}`)
            ele.appendChild(text3)
            row.appendChild(ele)
        }
        tableau.appendChild(row)
    });
    
})

input.oninput = function(){
        // Declare variables
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        console.log('prout')
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
}