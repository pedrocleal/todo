import { TodoContainer } from './styles';
import { Check, Clear } from '@material-ui/icons';

function Todo({ title, onFinished, id, onRemove, finished}) {
  return (
    <TodoContainer finished={finished}>
      <div>
        <h2>{title}</h2>
      </div>

      <div className="buttons">
        <button className="finished" onClick={() => onFinished(id)}><Check fontSize="large"/></button>
        <button className="remove" onClick={() => onRemove(id)}><Clear fontSize="large"/></button>
      </div>
    </TodoContainer>
  );
}

export default Todo;