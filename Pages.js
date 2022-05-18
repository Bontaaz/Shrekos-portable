suivant.onclick = function (){
    Pages++
    tableau.replaceChildren()
    if (actualPage == 'data10') {
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
    if (actualPage == 'data20') {
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
    if (actualPage == 'data50') {
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
    if (actualPage == 'data100') {
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
    if (actualPage == 'dataAll') {
        dataAll[Pages].forEach(element => {
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
    
    
    }

    function dat10(){
        console.log('SIUUUUUUUUUUU')
        actualPage = 'data10'
        Pages = 0
        tableau.replaceChildren()
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
    function dat20(){
        actualPage = 'data20'
        Pages = 0
        tableau.replaceChildren()
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
    function dat50(){
        actualPage = 'data50'
        Pages = 0
        tableau.replaceChildren()
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
    function dat100(){
        actualPage = 'data100'
        Pages = 0
        tableau.replaceChildren()
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
        Pages = 0
        actualPage = 'dataAll'
        tableau.replaceChildren()
        dataAll[Pages].forEach(element => {
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
