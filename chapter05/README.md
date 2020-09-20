# 5장 ref: DOM에 이름 달기
DOM을 꼭 직접적으로 건드려야 할 때 ref를 사용한다.
#### DOM을 꼭 사용해아 하는 상황
- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

### 콜백 함수를 통한 ref 설정
ref를 만드는 가장 기본적인 방법임. ref를 달고자 하는 요소에 ref라는 콜백함수를 props로 전달해 주면 된다.
```
  <input ref={(ref) => {this.superman=ref}} />
```

### createRef를 통한 ref 설정
리액트에 내장되어 있는 createRef 함수를 사용하는 방법이다. (리액트 v16.3부터 도입. 이전 버전에서는 작동하지 않는다.)
```
  class RefSample extends React.Component {
    superman = React.createRef();

    handleFocus = () => {
      // ref에 설정해둔 DOM에 접근하려면 .current를 사용하면 된다.
      this.superman.current.focus();
    }

    render() {
      return (
        <div>
          <input ref={this.superman}>
        </div>
      )
    }
  }
```
