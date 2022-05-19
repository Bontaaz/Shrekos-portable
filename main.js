const tableau = document.getElementById('tbody')
const suivant = document.getElementById('suivant')
const liste = document.getElementsByName('Liste')
const prec = document.getElementById('prec')

console.log(tableau)



let v = {}
v.Pages = 0
let actualPage = 'data20'
let dataAll
let data
let data10 = [[]]
let data20 = [[]]
let data50 = [[]]
let data100 = [[]]

function grossefonction(){
    return fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then(data => data)
}


grossefonction().then((res) => {
    dataAll = res
    
     dataAll.forEach((element,index) => {

        if (index%10 == 0) {
            data10.push([])  
        }
        if (index%20 == 0) {
            data20.push([])  
        }
        if (index%50 == 0) {
            data50.push([])  
        }
        if (index%100 == 0) {
            data100.push([])  
        }
        
        data10[Math.floor(index/10)].push(element)
        data20[Math.floor(index/20)].push(element)
        data50[Math.floor(index/50)].push(element)
        data100[Math.floor(index/100)].push(element)
        
        
        
    }); 
    
    if (data10[data10.length-1] == 0) {
        data10.pop()
    }
    if (data20[data10.length-1] == 0) {
        data20.pop()
    }
    if (data50[data10.length-1] == 0) {
        data50.pop()
    }
    if (data100[data10.length-1] == 0) {
        data100.pop()
    }
    
    dat20(0)
    
})



const input = document.getElementById('myInput')
input.oninput = function(){
        // Declare variables
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
       
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
prec.onclick = function (){
nextprec(-1)
}
suivant.onclick = function (){
    nextprec(1)
}

    function nextprec(x){
    const listee = document.getElementById('listee')
    let val = listee.options[listee.selectedIndex].value
    console.log(v.Pages)
        if (val == "10") {
          //  actualPage = 'data10'
            if (data10[v.Pages+x] !== undefined) {
                v.Pages += x
            }
        } else if (val == "20") {
         //   actualPage = 'data20'
            if (data20[v.Pages+x] !== undefined) {
                v.Pages += x
            }
          
        } else if (val == "50") {
         //   actualPage = 'data50'
            if (data50[v.Pages+x] !== undefined) {
                v.Pages += x
            }
            
        } else if (val == "100") {
         //   actualPage = 'data100'
            if (data100[v.Pages+x] !== undefined) {
                v.Pages += x
            }
        } else if (val == "All") {
          //  actualPage = 'dataAll'
        }    
   
    if (actualPage == 'data10') {
        dat10(v.Pages)
    }
    if (actualPage == 'data20') {
        dat20(v.Pages)
    }
    if (actualPage == 'data50') {
        dat50(v.Pages)
    }
    if (actualPage == 'data100') {
        dat100(v.Pages)
    }
    if (actualPage == 'dataAll') {
        datAll(v.Pages)
    }
    
    }

    function dat10(Pages){
        console.log(tableau)
        tableau.innerHTML = ""
        actualPage = 'data10'
        
        data10[Pages].forEach(element => {
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
    }
    function dat20(Pages){
      
        
       // tbo = document.getElementById('tbody')
        tableau.innerHTML = ""
        data20[Pages].forEach(element => {
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
    }
    function dat50(Pages){
       
        
        tableau.innerHTML = ""
        data50[Pages].forEach(element => {
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
    }
    function dat100(Pages){
        
       
        tableau.innerHTML = ""
        data100[Pages].forEach(element => {
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
    }
    function datAll(){
        
        
        tableau.innerHTML = ""
        dataAll.forEach(element => {
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
    }

function datX(){
    const listee = document.getElementById('listee')
    val = listee.options[listee.selectedIndex].value
    v.Pages = 0
    actualPage = 'data'+val;
    if (val == "10") {
        dat10(0)
    } else if (val == "20") {
        dat20(0)
    } else if (val == "50") {
        dat50(0)
    } else if (val == "100") {
        dat100(0)
    } else if (val == "All") {
        datAll()
    }
    console.log(v.Pages)
}