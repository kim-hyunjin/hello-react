# 클래스형 컴포넌트

- 클래스형 컴포넌트는 state 기능 및 라이프사이클 기능을 사용할 수 있으며, 임의 메서드를 정의할 수 있다.
- 클래스형 컴포넌트에서는 render함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 한다.

#### 함수형 컴포넌트의 장점

- 클래스형 컴포넌트보다 선언하기 편하다.
- 메모리 자원을 클래스형 컴포넌트보다 덜 사용한다.
- 빌드한 후 배포할 때 결과물의 파일크기가 더 작다.
  하지만 클래스형 컴포넌트와 성능과 파일 크기 면에서 사실상 별 차이가 없음.

#### 함수형 컴포넌트의 주요 단점

- state와 라이프사이클 API의 사용이 불가
  ==> 리액트v16.8이후 Hooks 기능이 도입되면서 해결

### props

properties를 줄인 표현. 컴포넌트 속성을 설정할 때 사용하는 속성. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.

- props의 값은 컴포넌트의 파라미터 함수로 받아와 사용 가능
- 클래스 컴포넌트의 경우 this.props 사용
- props기본값 설정 : defaultProps
- 태그 사이의 내용을 보여주는 children

### 비구조화 할당 문법을 통해 props 내부 값 추출하기

- ex) const {name, children} = props;

### propTypes를 통한 props 검증

```
  import PropTypes from 'prop-types';
  MyComponent.propTypes = {
    name: PropTypes.string
  }
```

- 타입이 일치하지 않는 경우 크롬 콘솔화면에서 에러 확인 가능

### isRequired를 사용해 필수 propTypes 설정

```
  MyComponent.propTypes = {
    name: PropTypes.string.isRequired
  }
```

### 더 많은 PropTypes 종류

- array
- arrayOf(PropTypes) : 특정 PropTypes로 이루어진 배열
- bool
- func
- number
- object
- string
- symbol : ES6의 symbol
- node : 렌더링할 수 있는 모든 것(숫자, 문자열, JSX, children)
- instanceOf(클래스) : 특정 클래스의 인스턴스
- oneOf(['dog', 'cat']) : 주어진 배열 요소 중 하나
- oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안의 종류 중 하나
- objectOf(React.PropTypes.number) : 객체의 모든 키 값이 인자로 주어진 PropType인 객체
- shape({name: PropTypes.string, num: PropTypes.number}) : 주어진 스키마를 가진 객체
- any
- https://github.com/facebook/prop-types

### state
