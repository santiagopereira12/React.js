import './TodoCounter.css';

function TodoCounter({total, completed}){
    return (
        <h1 className='TodoCounter'>
            Hemos hecho <span>{completed}</span> de <span>{total}</span> tareas.
        </h1>
    );
}

export {TodoCounter};