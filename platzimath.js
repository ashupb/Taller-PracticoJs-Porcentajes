const PlatziMath = {};

PlatziMath.esImpar = function esImpar(lista) {
    return lista.length % 2;
}

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {

    function sumarElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;   
}

PlatziMath.calcularModa = function calcularModa(lista) {
    listaCount = {};

    for (let i = 0; i < lista.length; i++) {    
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaArrayOrdenada = ordenarListaBidimensional(listaArray,1);
    const listaMaxNumber = listaArrayOrdenada[listaArrayOrdenada.length - 1];
    
    /*console.log({listaCount, listaArray, listaArrayOrdenada, listaMaxNumber});*/
    /*console.log('La moda es: ' + listaMaxNumber[0]);*/
    
    const moda = listaMaxNumber[0];
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if(listaEsPar) {
    const MitadListaPar1 = (lista.length / 2) - 1;
    const MitadListaPar2 = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[MitadListaPar1]);
    listaMitades.push(lista[MitadListaPar2]);

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;

    } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = (lista[indexMitadListaImpar]);
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
    }
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}





