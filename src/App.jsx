import { useState } from 'react';
import './App.css';

import GeneralInfo from './components/GeneralInfo';
import EducationExp from './components/EducationExp';
import PracticalExp from './components/PracticalExp';

const styles = {
  width: '100%',
  height: '10.5pt',
  backgroundColor: 'rgb(21, 128, 61)',
  color: 'red'
};

function App() {
  const states = ['filling', 'filled'];
  const [status, setStatus] = useState(0);
  const [statusId, setStatusId] = useState(0);

  return (
    <>
      <div style={styles}></div>
      {status === 0 ? (
        <>
          <GeneralInfo key='info' status={status} />
          <EducationExp key='edexp' status={status} />
          <PracticalExp key='prexp' status={status} />
          <button onClick={() => setStatus(1)}>Create</button>
        </>
      ) : (
        <>
          <GeneralInfo key='info' status={status} />
          <hr></hr>
          <EducationExp key='edexp' status={status} />
          <PracticalExp key='prexp' status={status} />
          <button onClick={() => setStatus(0)}>Edit</button>
        </>
      )}
    </>
  );
}

export default App;
