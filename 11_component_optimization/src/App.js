import React, {useCallback, useState, useRef} from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate'

function createBulkTodos() {
  const array = [];
  for(let i = 0; i < 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4); // 고윳값으로 사용될 id를 ref를 사용하여 변수에 담기

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  );

    const onRemove = useCallback(
      id => {
        setTodos(todos.filter(todo => todo.id !== id));
      }, [todos]
    )

    const onToggle = useCallback(
      id => {
        setTodos(
          todos.map(todo => todo.id === id ? {...todo, checked:!todo.checked} : todo)
        );
      }, [todos]
    );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;