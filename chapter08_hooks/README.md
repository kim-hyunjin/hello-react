# Hooks
Hooks는 리액트 v16.8에 새로 도입된 기능. 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공. 

### useState
함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.<br/>
useState 함수의 파라미터에는 상태의 기본값을 넣어준다.<br/>
이 함수가 호출되면 배열을 반환한다. 첫번째 원소는 상태값, 두번째 원소는 상태를 설정하는 함수이다.

### useEffect
리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태.<br/>
