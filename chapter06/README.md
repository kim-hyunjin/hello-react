# 컴포넌트 반복

### map사용하기
```
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};
```

### key
컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 key를 사용.<br/>
key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교.<br/>
하지만 key가 있다면 이 값을 사용해 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다.

#### key 설정
```
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>); // map함수에 전달되는 콜백 함수의 인수인 index 값을 사용.
  return <ul>{nameList}</ul>;
};
```
