import { SetStateAction, useState } from 'react';
import './App.css';
import Banner from '../components/Banner';

function App() {
  const [Name, setName] = useState('dsdaddsadasd');

  return (
    <div className="Container">
      <div className="Box">
        <Banner />
        <h1>Today overview</h1>
      </div>
    </div>
  );
}

export default App;
