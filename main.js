const name = document.getElementById('name')
const race = document.getElementById('race')
const gender = document.getElementById('gender')
const alignement = document.getElementById('Alignement')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const place = document.getElementById('Place')
const powerstats = document.getElementById('Powerstats')

const tableau = document.getElementById('tbody')
const suivant = document.getElementById('suivant')
const liste = document.getElementsByName('Liste')
const prec = document.getElementById('prec')






let v = {}
v.Pages = 0
v.actualPage = 20
v.data = []
let dataPrev
let dataAll
let data


function grossefonction(){
    return fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then(data => data)
}


grossefonction().then((res) => {
    dataAll = res
    
    dataAll.forEach((element,index) => {        
        
    }); 
    v.data = dat()
    
})




const input = document.getElementById('myInput')
const select = document.getElementById('select')
let usrChoice = select.value
select.addEventListener('change',()=>{
    
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
        if (v.Pages*v.actualPage < 563 && v.Pages >= 0 && v.actualPage !== 600) {
            v.Pages += x
        } 
    }else if (x === -1) {
        if (v.Pages*v.actualPage < 563 && v.Pages > 0  && v.actualPage !== 600) {
            v.Pages += x
        }
    }
    v.data = dat()
    
    }
    
    function dat(dot){
        tableau.innerHTML = ""
        
        if (dot === undefined) {
            data = dataAll.slice(v.actualPage*v.Pages,v.actualPage*v.Pages+v.actualPage)
        }else{
            data = dot
        }
        
        
        
        
        data.forEach(element => {
            let data = [`Intelligence = ${element.powerstats.intelligence}`,`Speed = ${element.powerstats.speed}`,`Strength = ${element.powerstats.strength}`,`Durability = ${element.powerstats.durability}`,`Power = ${element.powerstats.power}`,`Combat = ${element.powerstats.combat}`,];
            let tabdata = [`${element.name}`,`${element.appearance.gender}`,`${element.appearance.race}`,`${element.appearance.weight[0]}`,`${element.appearance.height[0]}`,`${element.biography.placeOfBirth}`,`${element.biography.alignment}`,'Power Stats :']
            let row = document.createElement('tr')
            for (let index = 0; index < 8; index++) {
                let ele = document.createElement('td')
                let text3 = document.createTextNode(`${tabdata[index]}`)
                if (index == 0){
                   
                    ele.setAttribute('id','image')
                    let img = document.createElement('img')
                    img.src = `${element.images.sm}`
                    ele.appendChild(img)
                }
                ele.appendChild(text3)
                if (index == 7){
                    let powerlist = document.createElement('ul')
                    powerlist.setAttribute('id','myList')
                    
                    data.forEach((item)=>{
                        let li = document.createElement("li");
                        li.innerText = item;
                        powerlist.appendChild(li);
                    })
                    ele.appendChild(powerlist)
                }
                row.appendChild(ele)
            }
            
            tableau.appendChild(row)
           
        });
        
        for (let index = 0; index < data.length; index++) {
            v.data[index] = data[index]
        }
        for (let index = data.length; index >0; index--) {
            data.pop() 
        }
        
        return v.data
    }
   
    
function datX(){
    const listee = document.getElementById('listee')
    val = listee.options[listee.selectedIndex].value
    if (val === 'All') {
        v.actualPage = 600
        v.Pages = 0
    }else{
        v.actualPage = parseInt(val)
        v.Pages = 0
    }
    
    
    v.data = dat()
}



oncli()

function oncli(){
name.onclick = function (){
    let nam = document.getElementById('name')
    let ok = nam.getAttribute('value')
    sort('name',ok)
    

}
race.onclick = function (){
    let nam = document.getElementById('name')
    let ok = nam.getAttribute('value')
    sort('race',ok)
}
gender.onclick = function (){
    let nam = document.getElementById('name')
    let ok = nam.getAttribute('value')
    sort('gender',ok)
}
alignement.onclick = function (){
    let nam = document.getElementById('name')
    let ok = nam.getAttribute('value')
    sort('alignement',ok)
}
weight.onclick = function (){
    let nam = document.getElementById('name')
    let ok = nam.getAttribute('value')
    sort('weight',ok)
}
height.onclick = function (){
    let nam = document.getElementById('name')
    let ok = nam.getAttribute('value')
    sort('height',ok)
}
place.onclick = function (){
    let nam = document.getElementById('name')
    let ok = nam.getAttribute('value')
    sort('place',ok)
}
}


function sort(type,value){
    let leNb
switch (type) {
    case 'name':
        leNb = 0
        break;
    case 'race':
        leNb = 2
        break;
    case 'gender':
        leNb = 1
        break;

    case 'alignement':
        leNb = 6
        break;
    case 'weight':
        leNb = 3
        break;
        leNb = 0
    case 'height':
        leNb = 4
        break;
    case 'place':
        leNb = 5
        break;
}
    if (value === 'ok') {
        v.data = dat()
    
        let ta = [] 
        
        v.data.forEach(element => {
            let tabdata = [`${element.name}`,`${element.appearance.gender}`,`${element.appearance.race}`,`${element.appearance.weight[0]}`,`${element.appearance.height[0]}`,`${element.biography.placeOfBirth}`,`${element.biography.alignment}`,`${element.powerstats[0]}`]
            
            if (v.data[0] == element) {
                ta.push(v.data[0])
            }else{
                for (let index = 0; index < ta.length; index++) {
                    let tabdata2 = [`${ta[index].name}`,`${ta[index].appearance.gender}`,`${ta[index].appearance.race}`,`${ta[index].appearance.weight[0]}`,`${ta[index].appearance.height[0]}`,`${ta[index].biography.placeOfBirth}`,`${ta[index].biography.alignment}`,`${ta[index].powerstats[0]}`]
                if (tabdata[leNb] > tabdata2[leNb]) {
                    ta.splice(index,0,element)
                    break
                }else if(index === ta.length-1){
                    ta.push(element)
                    break
                }
                
            }} 
            
            
        })
        dat(ta)
        let nam = document.getElementById('name')
        nam.setAttribute('value','not')
    } else if (value === 'not'){
        v.data = dat()
    
        let ta = [] 
        
        v.data.forEach(element => {
            let tabdata = [`${element.name}`,`${element.appearance.gender}`,`${element.appearance.race}`,`${element.appearance.weight[0]}`,`${element.appearance.height[0]}`,`${element.biography.placeOfBirth}`,`${element.biography.alignment}`,`${element.powerstats[0]}`]
            
            if (v.data[0] == element) {
                ta.push(v.data[0])
            }else{
                
                for (let index = ta.length-1; index >= 0  ; index--) {
                    let tabdata2 = [`${ta[index].name}`,`${ta[index].appearance.gender}`,`${ta[index].appearance.race}`,`${ta[index].appearance.weight[0]}`,`${ta[index].appearance.height[0]}`,`${ta[index].biography.placeOfBirth}`,`${ta[index].biography.alignment}`,`${ta[index].powerstats[0]}`]
    
                if (tabdata[leNb] > tabdata2[leNb]) {
                    ta.splice(index+1,0,element)
                    break
                }else if(index ===  0){
                    ta.unshift(element)  
                    break
                }
                
            }}   
        })
        dat(ta)
        let nam = document.getElementById('name')
        nam.setAttribute('value','ok')
    }
}
