import { SetStateAction, useState } from 'react';
import './App.css';
import Banner from '../components/Banner';

function App() {
  const [Name, setName] = useState('');
  const Test = (e: string): any => {
    setName(e);
  };
  return (
    <div className="Container">
      <div className="Box">
        <Banner />
        {Name}
      </div>
    </div>
  );
}

export default App;
