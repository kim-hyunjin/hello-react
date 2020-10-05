import React, {useState, useCallback} from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div className="App">
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
}

export default App;
