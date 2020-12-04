const binaryInputElement = document.getElementById('binary')

const decInputElement = document.getElementById('dec')


const buttonElement = document.querySelector('button')



function bin2dec(val){  
    const result = (parseInt(val,2))
    decInputElement.value =  result
}
function dec2bin(val){ 
    const result = (Number(val).toString(2))
    binaryInputElement.value = result
}
buttonElement.addEventListener('click', ()=>{   
    const valBinary = binaryInputElement.value
    const valDec = decInputElement.value
    if (valBinary & valDec){
        console.log("input one pls")
    }else{
        valBinary ? bin2dec(valBinary) : dec2bin(valDec)
    }
})
