import React from 'react';
import './TodoSearch.css'

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState();

    return (
        <input placeholder="Crear pagina." 
        className="TodoSearch"
        value={searchValue}
        onChange={
            (event)=>{
                console.log('Escribiste en el TodoSearch')
                console.log(event.target)
                console.log(event.target.value)
            }
        }
        />
    );
}

export  {TodoSearch};