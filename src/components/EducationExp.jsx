import { useState } from 'react';
import Education from './Education';

let nextId = 1;

export default function EducationExp({ status }) {
  const [list, setList] = useState([
    { id: 0, school: '', grade: '', date: ''},
  ]);

  function handleData(e, type, id) {
    const index = list.indexOf(...list.filter(obj => obj.id === id));
    setList([...list.slice(0, index), {...list[index], [type.toLowerCase()]: e.target.value}, ...list.slice(index + 1)]);
  }

  function handleClose(id) {
    const index = list.indexOf(...list.filter(obj => obj.id === id));
    if (index === 0) return
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  function handleClick() {
    setList([...list, { id: nextId, school: '', grade: '', date: ''}]);
    nextId++;
  }

  function handleUpClick(id) {
    const index = list.indexOf(...list.filter(obj => obj.id === id));
    if (index > 0) {
      const newList = [...list];
      const element = newList[index];
      newList.splice(index, 1);
      newList.splice(index - 1, 0, element);
      setList(newList);
    }
  }

  function handleDownClick(id) {
    const index = list.indexOf(...list.filter(obj => obj.id === id));
    if (index < list.length - 1) {
      const newList = [...list];
      const element = newList[index];
      newList.splice(index, 1);
      newList.splice(index + 1, 0, element);
      setList(newList);
    }
    console.log('down')
  }

  return (
    <div className="card">
      <h2>Educational Experience</h2>
      {status === 0? 
            list.map((obj) => 
              <Education status={status} onData={handleData} handleDelete={handleClose} handleUpClick={handleUpClick} handleDownClick={handleDownClick} list={obj} key={obj.id} />
            )
      :
      <div className="education-info">
        {list.map((element) => 
          <div key={element.id}>
            <div >{element.school}</div>
            <div >{element.grade}</div>
            <div >{element.date}</div>
          </div>
        )}
      </div>       
      }

      <button onClick={handleClick}>Add</button>
    </div>
  );
}
