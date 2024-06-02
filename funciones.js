let precio = 400000
Cantidad = 0
precioSpan = document.querySelector(".PrecioInicial");
precioSpan.innerHTML = precio
cantidadSpan = document.querySelector(".Cantidad")
precioTotalSpan = document.querySelector(".PrecioTotal")

//····FUNCIONES······//

function agregar(){
    Cantidad++
    cantidadSpan.innerHTML = Cantidad
    preciototal()
}

function remover(){
    if(Cantidad > 0){
        Cantidad--
        cantidadSpan.innerHTML = Cantidad
        preciototal()
    }
}
function preciototal(){
    const precioTotal = precio * Cantidad
    precioTotalSpan.innerHTML = precioTotal
}




