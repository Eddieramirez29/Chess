document.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('draggable')) {
        let imagen = e.target;
        let offsetX = e.clientX - imagen.getBoundingClientRect().left;
        let offsetY = e.clientY - imagen.getBoundingClientRect().top;

        function onMouseMove(e) {
            let posX = e.clientX - offsetX;
            let posY = e.clientY - offsetY;

            imagen.style.left = posX + 'px';
            imagen.style.top = posY + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});

