import { TodoContainer } from './styles';

function Todo({ title, onFinished, id, onRemove, finished}) {
  return (
    <TodoContainer finished={finished}>
      <div>
        <h2>{title}</h2>
      </div>

      <button className="finished" onClick={() => onFinished(id)}>CONCLUÍDO</button>
      <button className="remove" onClick={() => onRemove(id)}>REMOVER</button>
      
    </TodoContainer>
  );
}

export default Todo;