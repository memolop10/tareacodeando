function pelicula (tarjeta, ticket, descuento){
    let x = 1;
    let precioticket;
    let temp = ticket;
    let total = 0;


    while(true){

        precioticket = ticket * x;

        temp *= descuento;

        total += temp;

        if(precioticket > Math.ceil(total+tarjeta)){


            break;
        }
        x++;
    }
    return x;
    
}
console.log (pelicula(100, 10, 0.95));