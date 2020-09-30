# immer를 사용해 불변성 더 쉽게 유지하기

```
$ yarn add immer
```
```
import produce from 'immer';
const nextState = produce(originalState, draft => {
  draft.somewhere.deep.inside = 5;
})
```
첫번째 파라미터는 수정하고 싶은 상태, 두번째 파라미터는 상태를 어떻게 업데이트할 지 정의하는 함수.

```
import produce from 'immer';

const originalState = [
  {
    id: 1,
    todo: '전체 연산자와 배열 내장 함수로 불변성 유지하기',
    checked: true,
  },
  {
    id: 2,
    todo: 'immer로 불변성 유지하기',
    checked: false,
  }
];

const nextState = produce(originalState, draft => {
  const todo = draft.find(t => t.id === 2);
  todo.checked = true;
  draft.push({
    id: 3,
    todo: '일정 관리 앱에 immer 적용하기',
    checked: false,
  });

  draft.splice(draft.findIndex(t => t.id === 1), 1);
});
```