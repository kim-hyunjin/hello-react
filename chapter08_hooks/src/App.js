import React, {useState} from 'react';
import Counter from './Counter';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => {setVisible(!visible);}}>{visible? '숨기기':'보이기'}</button>
      {visible && <Counter />}
    </div>
  );
}

export default App;
