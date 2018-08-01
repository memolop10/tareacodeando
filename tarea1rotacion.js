let mipalabra = 'hola'
let micadena = [ 'raul', 'vino', 'rosa',  'olah', 'laho', 'ahol']



function rotaciones(lapalabra) {

    let rotacion = []
    for (let i = 0; i < lapalabra.length; i++) {


        let parte1 = lapalabra.substring(i)
        let parte2 = lapalabra.substring(0, i)


        rotacion.push(parte1 + parte2)

    }

    return rotacion

}

function contain_all_rots(palabra, cadena) {
    let mirotacion = rotaciones(palabra)
    console.log(mirotacion)
    for (let j = 0; j < mirotacion.length; j++) {
        // console.log(!cadena.includes(mirotacion[j]))
        if (!cadena.includes(mirotacion[j])) {
            console.log(mirotacion[j])
            return false
        }

    }
    return true



}

console.log(contain_all_rots(mipalabra, micadena))