import { useEffect, useState } from "react";
import Header from "../Header";
import Todo from "../Todo";

import { MainContainer, InputContainer } from './styles';

import add from '../../assets/plus.svg';
import clear from '../../assets/clear.svg';

const initialTodos = [
  {
    id: 1,
    title: 'Visitar meu linkedin 😄',
    finished: false,
  },
  {
    id: 2,
    title: 'Deixar uma estrela no repositório do Github ⭐',
    finished: false,
  },
]

function Main({ onToggleTheme, theme }) {
  
  const [ inputValue, setInputValue ] = useState('');
  
  const [ todos, setTodos ] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    
    if (storedTodos) {
      return JSON.parse(storedTodos)
    }
    
    return []
  });

  const [ firstVisit, setFirstVisit ] = useState(() => {
    const isFirstVisit = localStorage.getItem('firstVisit');

    if (isFirstVisit) {
      localStorage.setItem('firstVisit', JSON.stringify(false));
      return false;
    }

    return true
  })

  //effect to verify if is user firstVisit, if true, set initialTodos
  useEffect(() => {
    if (firstVisit) {
      localStorage.setItem('firstVisit', JSON.stringify(true));
      setTodos(initialTodos);
    }
    setFirstVisit(false);
  }, []);

  //effect to update todos in localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

  function handleNewTodo() {
    if (inputValue === '') {
      return alert('NÃO É POSSÍVEL ADICIONAR TODO VAZIO :(');
    }

    setTodos((prevState) => [
      {
        id: todos.length + 1,
        title: `${inputValue}`,
        finished: false,
      },
      ...prevState
    ]);

    setInputValue('');
  }

  function handleRemoveTodo(todoId) {
    setFirstVisit(false);
    setTodos((prevState) => prevState.filter(todo => todo.id !== todoId));
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
      <Header onToggleTheme={onToggleTheme} theme={theme}/>
      <MainContainer>
        <InputContainer>
          <div className="inputDiv">
            <label>New Todo</label>
            <input value={inputValue} onChange={handleInputChange} type="text" className="input" placeholder="Add new TODO" />
          </div>

          <div className="buttons">
            <button type="button" className="addButton" onClick={handleNewTodo}>
              <img src={add} alt="Add Todo"></img>
            </button>
            <button type="button" className="clearButton" onClick={handleClearTodos}>
              <img src={clear} alt="Clear todo's"></img>
            </button>
          </div>
        </InputContainer>
        <h1 className="mytodos">my todo's</h1>
        {todos.map((todo) => (
          <Todo 
            key={todo.id}
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

export default Main;
