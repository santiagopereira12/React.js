import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {CreateTodoBotton} from './CreateTodoBotton';


const defaultTodos = [
  {text: 'Iniciar el curso de React', completed: true},
  {text: 'Terminar el Curso de React', completed: false},
  {text: 'Iniciar Ejercicio', completed: true},
  {text: 'Estar marcado nuevamente', completed: false},
];

function App() {
  return (
    <>

      <TodoCounter completed={5} total={10} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoBotton />

    </>
  );
}


export default App;
