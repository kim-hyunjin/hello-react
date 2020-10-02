# 외부 API를 연동하여 뉴스 뷰어 만들기

### 비동기 작업의 이해
Ajax 기법을 사용하여 서버의 API를 호출. 작업을 동기적으로 처리하면 요청이 끝날 때까지 기다리는 동안 중지 상태가 되어 다른 작업을 할 수 없다. ==> 비동기로 처리하여 문제 해결.

### 콜백 함수
비동기 작업을 할 때 흔히 사용되는 방법.
```
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if(callback) {
      callback(result);
    }
  }, 1000)
}

increase(0, result => {
  console.log(result);
});
```

```
콜백 함수 중첩
increase(0, result => {
  console.log(result);
  increase(result, result => {
    console.log(result);
    increase(result, result => {
      console.log(result);
      increase(result, result => {
        console.log(result);
      });
    });
  });
});

이렇게 콜백 안에 또 콜백을 넣어 중첩하는 것을 콜백 지옥이라고 부른다.
```

### Promise
Promise는 콜백 지옥 같은 코드가 형성되지 않게 ES6에 도입된 기능이다.
```
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error('NumberToBig');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise
}

increase(0)
  .then(number => {
    console.log(number);
    return increase(number); // Promise를 리턴하면
  })
  .then(number => { // .then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .catch(e => { // 에러 발생 시 .catch를 통해 알 수 있음
    console.log(e);
  })
```

### async/await
async/await은 Promise를 더 쉽게 사용할 수 있도록 ES2017(ES8)에 적용된 문법.
```
function increase(number) {
  (...)
}

async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
```