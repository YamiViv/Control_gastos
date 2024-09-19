let listaNombreGastos = []; //esto se hace porque no se tiene un Nº en concreto de gastos y no se tenga que hacer multiples variables para cada uno
let listaValoresGastos = [];
let editIndex = -1;

//esta funcion se invoca al momento 
function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value; //lo de parentecis es el id que se encuentra en el html
    let valorGasto = document.getElementById('valorGasto').value;
    

   // console.log(nombreGasto);
  //console.log(valorGasto);

  if (valorGasto >= 150) {
    alert("Este gasto es demasiado alto, ¡ahorra un poco mas!");
}

    listaNombreGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    //alert('Click de usuario');
    actualizarListaGastos();
    
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento, posicion) => {

        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>${elemento} -USD ${valorGasto.toFixed(2)} 
           <button onclick="eliminarGasto(${posicion});">Eliminar</button> 
        </li>`;   /*"<li>" + elemento + "</li>";/*//*otra forma de concatenar*/
        /*creacion de un boton para eliminar un gasto si es el caso desde JS*/ 

        //*Calculamos el total de gastos
        totalGastos += Number(valorGasto); //funcion para que al momento de sumar no este concatenando y pueda ponerse en fromato numerico y no como texto pero Number acepta numeros decimales algo que no hace "parseInt"

    });

    listaElementos.innerHTML = htmlLista; //refleja la lista en pantalla con el ofrmato que le dimos en html.
    totalElementos.innerHTML = totalGastos.toFixed(2); //para poner los decimales con 2 decimales y no mas
    
};

function limpiar() {
  document.getElementById('nombreGasto').value = '';
  document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombreGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarBoton(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];

}
