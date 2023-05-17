const miarray=['Mesirve', 'Cristiano Romualdo', 
'Fernando Muralla', 'Ronalguiño'];


function swap(miarray, num1, num2){
    let firstSwap=miarray[num1];
    let secondSwap=miarray[num2];
    miarray.splice(num2,1,firstSwap);
    miarray.splice(num1,1,secondSwap);
    console.log(miarray);
}

swap(miarray,0,1);