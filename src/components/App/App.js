import { useState } from "react";
import Header from "../Header";
import Todo from "../Todo";

import { MainContainer, InputContainer } from './styles';

import add from '../../assets/plus.svg';
import clear from '../../assets/clear.svg';

const initialTodos = [
  {
    id: 1,
    title: 'Visitar meu linkedin',
    finished: false,
  },
  {
    id: 2,
    title: 'Deixar uma estrela no repositório do Github',
    finished: false,
  },
]

function App() {

  const [ todos, setTodos ] = useState(initialTodos);
  const [ inputValue, setInputValue ] = useState('');

  function handleNewTodo() {
    if (inputValue === '') {
      return alert('NÃO É POSSÍVEL ADICIONAR TODO VAZIO :(');
    }

    setTodos((prevState) => [
      ...prevState,
      {
        id: todos.length + 1,
        title: `${inputValue}`,
        finished: false,
      }
    ]);
  }

  function handleRemoveTodo(todoId) {
    setTodos((prevState) => prevState.filter(todo => todo.id !== todoId))
  }
  
  function handleFinishedTodo(todoId) {
    setTodos((prevState) => prevState.map(todo => {
      if(todo.id === todoId) {
        return {
          ...todo,
          finished: true
        }
      } 
      return todo
    }));
  }

  function handleInputChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  function handleClearTodos() {
    setTodos([]);
  }

  return (
    <>
      <Header />
      <MainContainer>
        <InputContainer>
          <div>
            <label>New Todo</label>
            <input value={inputValue} onChange={handleInputChange} type="text" className="input" placeholder="Add new TODO" />
          </div>

          <div className="buttons">
            <button className="addButton" onClick={handleNewTodo}>
              <img src={add} alt="Add Todo"></img>
            </button>
            <button className="clearButton" onClick={handleClearTodos}>
              <img src={clear} alt="Clear todo's"></img>
            </button>
          </div>
        </InputContainer>
        <h1 className="mytodos">my todo's</h1>
        {todos.map((todo) => (
          <Todo 
            id={todo.id}
            title={todo.title}
            finished={todo.finished}
            onRemove={handleRemoveTodo}
            onFinished={handleFinishedTodo}
          />
        ))}
    </MainContainer>
    </>
  );
}

export default App;
