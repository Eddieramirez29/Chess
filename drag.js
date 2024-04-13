document.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('draggable')) {
        let imagen = e.target;
        let offsetX = e.clientX - imagen.getBoundingClientRect().left;
        let offsetY = e.clientY - imagen.getBoundingClientRect().top;

        function onMouseMove(e) {
            let posX = e.clientX - offsetX;
            let posY = e.clientY - offsetY;

            if(posY <= 75)
            {
                posY = 75;
            }

            else if(posY >= 475)
            {
                posY = 475;
            }

            else if(posX <= 445)
            {
                posX = 445;
            }
            else if(posX >= 870)
            {
                posX = 870;
            }

            imagen.style.left = posX + 'px';
            imagen.style.top = posY + 'px';

           


            // let X = document.getElementById("coordenadas-X");
            // let Y = document.getElementById("coordenadas-Y");

            // X.textContent  = posX;
            // Y.textContent  = posY;
            
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});





