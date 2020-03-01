//función constructora
function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

//declarar un array vacio
  var autos = [];

// crear nuevos objetos con la función constructora
  for(i= 0; i<30; i++){
    var aut =new auto("Toyota"+i, "Modelo" + i, 1990 + i);
    autos.push(aut);
  }
  
//mostrar el array con su contenido
  for(i= 0; i<30; i++){
   console.log(`Marca: ${autos[i].marca} Modelo : ${autos[i].modelo} Año ${autos[i].anio}`) 
  }
