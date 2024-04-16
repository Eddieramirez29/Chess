function agregarPeon2() {
    let contenedor = document.getElementById('tablero');
    let left = 485;

  
  for(i = 0; i < 8;i++)
  {
    
     // Crear un elemento de imagen
     let imagen = document.createElement('img');
     // Establecer la URL de la imagen
     imagen.src = './piezas/pawn2.png';
     // Establecer la clase draggable
     imagen.classList.add('draggable');
      // Opcional: establecer atributos adicionales como el ancho y el alto
    imagen.width = 50;
    imagen.height = 50;
     // Establecer estilos de posicionamiento
    imagen.style.position = 'absolute';
    imagen.style.top = '150px'; // Posición vertical
    imagen.style.left = left.toString() + "px"; 

    left = left + 50;
   
    // Adjuntar la imagen al contenedor en el DOM
    
    contenedor.appendChild(imagen);
  }
 
  }

 
  function agregarTorre2() {
    let contenedor = document.getElementById('tablero');
    let left = 485;

  
  for(i = 0; i < 2;i++)
  {
    
     // Crear un elemento de imagen
     let imagen = document.createElement('img');
     // Establecer la URL de la imagen
     imagen.src = './piezas/tower2.png';
     imagen.classList.add('draggable');
      // Opcional: establecer atributos adicionales como el ancho y el alto
    imagen.width = 50;
    imagen.height = 50;
     // Establecer estilos de posicionamiento
    imagen.style.position = 'absolute';
    imagen.style.top = '100px'; // Posición vertical
    imagen.style.left = left.toString() + "px"; 

    left = left + 350;
   
    // Adjuntar la imagen al contenedor en el DOM
    
    contenedor.appendChild(imagen);
  }
 
  }


  function agregarCaballo2() {
    let contenedor = document.getElementById('tablero');
    let left = 535;

  
  for(i = 0; i < 2;i++)
  {
    
     // Crear un elemento de imagen
     let imagen = document.createElement('img');
     // Establecer la URL de la imagen
     imagen.src = './piezas/horse2.png';
     imagen.classList.add('draggable');
      // Opcional: establecer atributos adicionales como el ancho y el alto
    imagen.width = 50;
    imagen.height = 50;
     // Establecer estilos de posicionamiento
    imagen.style.position = 'absolute';
    imagen.style.top = '100px'; // Posición vertical
    imagen.style.left = left.toString() + "px"; 

    left = left + 250;
   
    // Adjuntar la imagen al contenedor en el DOM
    
    contenedor.appendChild(imagen);
  }
 
  }

  
  function agregarAlfil2() {
    let contenedor = document.getElementById('tablero');
    let left = 585;

  
  for(i = 0; i < 2;i++)
  {
    
     // Crear un elemento de imagen
     let imagen = document.createElement('img');
     // Establecer la URL de la imagen
     imagen.src = './piezas/bishop2.png';
     imagen.classList.add('draggable');
      // Opcional: establecer atributos adicionales como el ancho y el alto
    imagen.width = 50;
    imagen.height = 50;
     // Establecer estilos de posicionamiento
    imagen.style.position = 'absolute';
    imagen.style.top = '100px'; // Posición vertical
    imagen.style.left = left.toString() + "px"; 

    left = left + 150;
   
    // Adjuntar la imagen al contenedor en el DOM
    
    contenedor.appendChild(imagen);
  }
 
  }

  function agregarReina2() {
    let contenedor = document.getElementById('tablero');
    let left = 635;

  

    
     // Crear un elemento de imagen
     let imagen = document.createElement('img');
     // Establecer la URL de la imagen
     imagen.src = './piezas/queen2.png';
     imagen.classList.add('draggable');
      // Opcional: establecer atributos adicionales como el ancho y el alto
    imagen.width = 50;
    imagen.height = 50;
     // Establecer estilos de posicionamiento
    imagen.style.position = 'absolute';
    imagen.style.top = '100px'; // Posición vertical
    imagen.style.left = left.toString() + "px"; 


   
    // Adjuntar la imagen al contenedor en el DOM
    
    contenedor.appendChild(imagen);
  }


  function agregarRey2() {
    let contenedor = document.getElementById('tablero');
    let left = 685;
    
     // Crear un elemento de imagen
     let imagen = document.createElement('img');
     // Establecer la URL de la imagen
     imagen.src = './piezas/king2.png';
     imagen.classList.add('draggable');
      // Opcional: establecer atributos adicionales como el ancho y el alto
    imagen.width = 50;
    imagen.height = 50;
     // Establecer estilos de posicionamiento
    imagen.style.position = 'absolute';
    imagen.style.top = '100px'; // Posición vertical
    imagen.style.left = left.toString() + "px"; 


   
    // Adjuntar la imagen al contenedor en el DOM
    
    contenedor.appendChild(imagen);
  }

  agregarPeon2();
  agregarTorre2();
  agregarCaballo2();
  agregarAlfil2();
  agregarReina2();
  agregarRey2();
