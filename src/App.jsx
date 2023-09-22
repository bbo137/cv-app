import { useState } from 'react';
import './App.css';

import GeneralInfo from './components/GeneralInfo';
import EducationExp from './components/EducationExp';
import PracticalExp from './components/PracticalExp';
import Config from './components/Config';

const styles = {
  width: '100%',
  height: '10.5pt',
  color: 'red',
};

function App() {
  const states = ['filling', 'filled'];
  const [status, setStatus] = useState(0);
  const [statusId, setStatusId] = useState(0);
  const [currentColor, setcurrentColor] = useState('#0369a1');

  return (
    <>
      <div style={{ ...styles, backgroundColor: currentColor }}></div>
      {status === 0 ? (
        <>
          <div className="main-title">
            <h1>CV-App: Fill the following fields</h1>
          </div>
          <GeneralInfo key="info" status={status} currentColor={currentColor} />
          <EducationExp
            key="edexp"
            status={status}
            currentColor={currentColor}
          />
          <PracticalExp
            key="prexp"
            status={status}
            currentColor={currentColor}
          />
          <Config
            key="cfg"
            status={status}
            setcurrentColor={setcurrentColor}
            currentColor={currentColor}
          />
          <button onClick={() => setStatus(1)}>Create</button>
        </>
      ) : (
        <>
          <GeneralInfo key="info" status={status} currentColor={currentColor} />
          <hr></hr>
          <EducationExp
            key="edexp"
            status={status}
            currentColor={currentColor}
          />
          <PracticalExp
            key="prexp"
            status={status}
            currentColor={currentColor}
          />
          <Config
            key="cfg"
            status={status}
            setcurrentColor={setcurrentColor}
            currentColor={currentColor}
          />
          <button onClick={() => setStatus(0)}>Edit</button>
        </>
      )}
    </>
  );
}

export default App;
