# Hooks
Hooks는 리액트 v16.8에 새로 도입된 기능. 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공. 

### useState
함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.<br/>
useState 함수의 파라미터에는 상태의 기본값을 넣어준다.<br/>
이 함수가 호출되면 배열을 반환한다. 첫번째 원소는 상태값, 두번째 원소는 상태를 설정하는 함수이다.

### useEffect
리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태.<br/>

#### 마운트될 때만 실행
useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두번째 파라미터로 비어있는 배열을 넣어주면 된다.

#### 특정 값이 업데이트 될때만 실행
```
클래스 컴포넌트의 경우
componentDidUpdate(prevProps, prevState) {
  if (prevProps.value !== this.props.value) {
    doSomething();
  }
}

useEffect의 경우
useEffect의 두번째 파라미터로 전달되는 배열에 검사하고 싶은 값을 넣어준다.

useEffect(() => {
  console.log(name);
}, [name])
```

#### 뒷정리하기
useEffect는 기본적으로 렌더링된 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣었는지에 따라 실행조건이 달라진다.<br/>
컴포넌트가 언마운트되기 전, 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수를 반환해주어야 한다.<br/>
언마운트될 때만 뒷정리 함수를 호출하고 싶다면 두번째 파라미터에 빈 배열을 넣으면 된다.