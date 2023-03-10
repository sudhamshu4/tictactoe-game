import { useState } from 'react';
import './styles.scss';

function App() {
  const [counter, setCounter] = useState(1);

  console.log('hello');

  const onBtnClick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };

  return (
    <div className="app">
      <button onClick={onBtnClick}>Click me please</button>
      <div>{counter}</div>
    </div>
  );
}

export default App;
