function TodoCounter({total, completed}){
    return (
        <h1>
            Hemos hecho {completed} de {total} tareas.
        </h1>
    );
}

export {TodoCounter};