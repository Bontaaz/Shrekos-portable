import {oncli  } from "./sort.js";

const tableau = document.getElementById('tbody')
const suivant = document.getElementById('suivant')
const liste = document.getElementsByName('Liste')
const prec = document.getElementById('prec')

console.log(tableau)

oncli()

let v = {}
v.Pages = 0
v.actualPage = 20
let dataAll
let data

function grossefonction(){
    return fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then(data => data)
}


grossefonction().then((res) => {
    dataAll = res
    console.log(dataAll)
    dataAll.forEach((element,index) => {        
        
    }); 
    dat()
    
})



console.log(dataAll)
const input = document.getElementById('myInput')
const select = document.getElementById('select')
let usrChoice = select.value
select.addEventListener('change',()=>{
    console.log('bitas')
    usrChoice = select.value

})
input.oninput = function(){
        // Declare variables
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
       
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[usrChoice];
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
prec.onclick = function (){
nextprec(-1)
}
suivant.onclick = function (){
nextprec(1)
}

    function nextprec(x){
    const listee = document.getElementById('listee')
    let val = listee.options[listee.selectedIndex].value
    
    if (x === 1) {
        if (v.Pages*v.actualPage < 563 && v.Pages >= 0) {
            v.Pages += x
        } 
    }else if (x === -1) {
        if (v.Pages*v.actualPage < 563 && v.Pages > 0) {
            v.Pages += x
        }
    }
    dat()
    
    }

    function dat(){
        tableau.innerHTML = ""
        
        console.log((v.actualPage*v.Pages)+v.actualPage)
        
        data = dataAll.slice(v.actualPage*v.Pages,v.actualPage*v.Pages+v.actualPage)
        console.log(data)
        data.forEach(element => {
            let tabdata = [`${element.name}`,`${element.appearance.gender}`,`${element.appearance.race}`,`${element.appearance.weight[0]}`,`${element.appearance.height[0]}`,`${element.biography.placeOfBirth}`,`${element.biography.alignment}`,`${element.powerstats[0]}`]
            let row = document.createElement('tr')
            for (let index = 0; index < 8; index++) {
                let ele = document.createElement('td')
                let text3 = document.createTextNode(`${tabdata[index]}`)
                if (index == 0){
                    console.log('cacaaaa')
                    ele.setAttribute('id','image')
                    let img = document.createElement('img')
                    img.src = `${element.images.sm}`
                    ele.appendChild(img)
                }else{
                    ele.setAttribute('id','content')
                }
                ele.appendChild(text3)
                row.appendChild(ele)
            }
            
            tableau.appendChild(row)
        });
        for (let index = data.length; index >0; index--) {
            data.pop() 
        }
        console.log(data)
    }
   
function datX(){
    const listee = document.getElementById('listee')
    val = listee.options[listee.selectedIndex].value
    v.actualPage = parseInt(val)
    v.Pages = 0
    console.log(v)
    dat()
}