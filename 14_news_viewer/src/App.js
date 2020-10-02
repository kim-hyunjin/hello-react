import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=kr&' +
          'apiKey=80c7785acfbd48448a82e895b4629224';
  const onClick = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default App;
