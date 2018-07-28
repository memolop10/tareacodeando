let arreglo = cArreglo(10);
let vuelta = 1;

console.log('desordenado', arreglo);

Burbuja();

console.log('ordenado', arreglo);

function cArreglo (tamaño) {
    let arr = [];

    for(let i = tamaño; i > 0; i--){
        arr.push(i);
    }
    return arr;
}


function cambiar (ia, ib){
    const temp = arreglo[ia];
    arreglo [ia] = arreglo [ib];
    arreglo [ib] = temp;
    
    console.log(vuelta++, '-', ia , ib, 'Intercambio===', temp, arreglo[ia]);
}

function Burbuja(){
    for(let i = 0; i < arreglo.length; i++) {
       
        for(let j = 0; j <arreglo.length - 1; j++) {
           
            if (arreglo[j] > arreglo[j + 1]){
                
                cambiar(j, j + 1 )
            }

        }
    }
}