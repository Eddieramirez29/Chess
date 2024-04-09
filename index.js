const tablero = document.getElementById('tablero');

function createBoard()
{
    //Generar las 64 casillas del tablero
for (let i = 0; i < 64; i++) {
    const casilla = document.createElement('div');
    casilla.classList.add('casilla');

    if ( (i % 2 === 0 && i < 8) || (i % 2 === 1 && i < 8) ) 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('par');
        } 
        else
        {
            casilla.classList.add('impar');
        }
    }
    else if ( (i % 2 === 0 && i < 16) || (i % 2 === 1 && i < 16) ) 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('impar');
        } 
        else
        {
            casilla.classList.add('par');
        }
    }
    else if ( (i % 2 === 0 && i < 24) || (i % 2 === 1 && i < 24) ) 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('par');
        } 
        else
        {
            casilla.classList.add('impar');
        }
    }
    else if ( (i % 2 === 0 && i < 32) || (i % 2 === 1 && i < 32) ) 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('impar');
        } 
        else
        {
            casilla.classList.add('par');
        }
    }
    else if ( (i % 2 === 0 && i < 40) || (i % 2 === 1 && i < 40) ) 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('par');
        } 
        else
        {
            casilla.classList.add('impar');
        }
    }
    else if ( (i % 2 === 0 && i < 48) || (i % 2 === 1 && i < 48) ) 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('impar');
        } 
        else
        {
            casilla.classList.add('par');
        }
    }
    else if ( (i % 2 === 0 && i < 56) || (i % 2 === 1 && i < 56) ) 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('par');
        } 
        else
        {
            casilla.classList.add('impar');
        }
    }
    else 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('impar');
        } 
        else
        {
            casilla.classList.add('par');
        }
    }
    
    

    tablero.appendChild(casilla);
}

}

createBoard();