function agregarPeon() {
    let contenedor = document.getElementById('tablero');
    let left = 485;

  
  for(i = 0; i < 8;i++)
  {
    
     // Crear un elemento de imagen
     let imagen = document.createElement('img');
     // Establecer la URL de la imagen
     imagen.src = './piezas/chess_743907.png';
      // Opcional: establecer atributos adicionales como el ancho y el alto
    imagen.width = 50;
    imagen.height = 50;
     // Establecer estilos de posicionamiento
    imagen.style.position = 'absolute';
    imagen.style.top = '400px'; // Posición vertical
    imagen.style.left = left.toString() + "px"; 

    left = left + 50;
   
    // Adjuntar la imagen al contenedor en el DOM
    
    contenedor.appendChild(imagen);
  }
  
  
  
    
  }

  function agregarTorre() {
    let contenedor = document.getElementById('tablero');
    let left = 485;

  
  for(i = 0; i < 2;i++)
  {
    
     // Crear un elemento de imagen
     let imagen = document.createElement('img');
     // Establecer la URL de la imagen
     imagen.src = './piezas/chess.png';
      // Opcional: establecer atributos adicionales como el ancho y el alto
    imagen.width = 50;
    imagen.height = 50;
     // Establecer estilos de posicionamiento
    imagen.style.position = 'absolute';
    imagen.style.top = '450px'; // Posición vertical
    imagen.style.left = left.toString() + "px"; 

    left = left + 350;
   
    // Adjuntar la imagen al contenedor en el DOM
    
    contenedor.appendChild(imagen);
  }
  
  
  
    
  }

  agregarPeon();
  agregarTorre();