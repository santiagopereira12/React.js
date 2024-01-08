import './TodoSearch.css'

function TodoSearch(){
    return (
        <input placeholder="Crear pagina." 
        className="TodoSearch"
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