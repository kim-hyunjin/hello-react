# 컴포넌트 성능 최적화
### 느려지는 원인 분석
컴포넌트는 다음과 같은 상황에서 리렌더링이 발생한다.
1. 자신이 전달받은 props가 변경될 때
2. 자신의 state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. forceUpdate 함수가 실행될 때

현재 앱에서 '할 일 1'의 항목을 체크할 경우 App 컴포넌트 state가 변경되면서 App 컴포넌트가 리렌더링 된다.<br/>
부모 컴포넌트가 리렌더링되었으니 TodoList 컴포넌트가 리렌더링되고 그 안의 무수한 컴포넌트들도 리렌더링 된다.<br/>
'할 일 1'의 항목은 리렌더링되어야 하는 것이 맞지만 나머지는 리렌더링될 필요가 없다.<br/>
불필요한 리렌더링을 방지해 성능을 최적화해줘야 한다.

### React.memo를 사용하여 컴포넌트 성능 최적화
컴포넌트의 리렌더링을 방지할 때는 7장에서 배운 shouldComponentUpdate 라이프사이클 메서드를 사용하면 된다. <br/>
하지만 함수형 컴포넌트에서는 사용할 수 없다. 대신 React.memo라는 함수를 사용한다.
```
export default React.memo(TodoListItem);
```
이렇게하면 TodoListItem 컴포넌트는 props가 바뀌지 않으면 리렌더링 하지 않는다.

### useState의 함수형 업데이트
기존에 setTodos 함수를 사용할 때는 새로운 상태를 파라미터로 넣어 주었다.
setTodos를 사용할 때 새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의해주는 업데이트 함수를 넣을 수도 있다. -> 함수형 업데이트
```
기존
setNumber(number+1)

함수형 업데이트
const onIncrease = useCallback(
  () => setNumber(prevNumber => prevNumber + 1), []
);
```
```
기존
const onRemove = useCallback(
      id => {
        setTodos(todos.filter(todo => todo.id !== id));
      }, [todos]
    );

함수형 업데이트
const onRemove = useCallback(
      id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
      }, []
    );
```

#### 개발환경에서의 성능
yarn start를 통해 개발서버를 구동하고 있는데, 실제 프로덕션에서 구동될 때보다 처리속도가 느리다.
```
프로덕션 모드로 구동하기
$ yarn build
$ yarn global add serve
$ serve -s build
```

### useReducer 사용하기
useState의 함수형 업데이트를 사용하는 대신, useReducer를 사용해도 된다.
```
function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
    default:
      return todos;
  }
}

// useReducer 두번째 파라미터로 초기 상태를 넣어주어야 한다.
const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({type: 'INSERT', todo});
      nextId.current += 1;
    }, []
  );
```
useReducer를 사용하는 방법은 상태를 업데이트하는 로직을 모아서 컴포넌트 바깥에 둘 수 있다는 장점이 있다.