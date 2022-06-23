import React, { useState } from 'react';
import { useCallback } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState();
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP running');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle]); // allowToggle 값이 바뀔 때마다 새로운 함수를 만들어야 한다. 메모리에 저장되어 있는 함수는 이전 allowToggle값을 가지고 있다.(클로저)
  // CHECK THIS : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
