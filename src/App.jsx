import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import GeneralInfo from './components/GeneralInfo';
import EducationExp from './components/EducationExp';
import ProfesionalExp from './components/ProfesionalExp';

function App() {
  const states = ['filling', 'filled'];
  const [status, setStatus] = useState(0);
  const [statusId, setStatusId] = useState(0);

  return (
    <>
      <h1>Cv App</h1>
      {status === 0 ? (
        <>
          <h1>filling</h1>
          <GeneralInfo status={status} />
          <EducationExp status={status} />
          <ProfesionalExp></ProfesionalExp>
          <button onClick={() => setStatus(1)}>Create</button>
        </>
      ) : (
        <>
          <h1>filled</h1>
          <GeneralInfo status={status} />
          <EducationExp status={status} />
          <button onClick={() => setStatus(0)}>Edit</button>
        </>
      )}
    </>
  );
}

export default App;
