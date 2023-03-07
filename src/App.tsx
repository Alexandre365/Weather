import { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './App.css';

function App() {
  const [NameCity, setNameCity] = useState('City');
  return (
    <div className="Container">
      <div className="Box">
        <div className="Banner">
          <div className="Title">
            <FaMapMarkerAlt />
            <div>
              <h2>{NameCity}</h2>
              <p></p>
            </div>
          </div>
          <div
            className="Input"
            onKeyUp={e => {
              if (e.key === 'Enter') {
                console.log();
              }
            }}
          >
            <div className="Input_Main">
              <input
                type="text"
                placeholder="Search..."
                onChange={e => {
                  console.log();
                }}
              />
              <div className="Btn_icon">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
