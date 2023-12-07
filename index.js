




const createCells= function (){
    const boxDiv = document.getElementById('box')
}
for (let i = 1; i<77 ; i++){
    console.log(i)

    const cellDiv = document.createElement('div')
 
cellDiv.classList.add('numbers')
const cellValue = document.createElement('h3')
    
    cellValue.innerText = i 
   cellDiv.appendChild(cellValue)
   
}