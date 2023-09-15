import { useState } from 'react';
import Practical from './Practical';

let nextId = 1;

export default function PracticalExp({ status }) {
  const [list, setList] = useState([
    { id: 0, company: '', role: '', date: '', description: '' },
  ]);

  function handleData(e, type, id) {
    const index = list.indexOf(...list.filter((obj) => obj.id === id));
    setList([
      ...list.slice(0, index),
      { ...list[index], [type.toLowerCase()]: e.target.value },
      ...list.slice(index + 1),
    ]);
  }

  function handleClose(id) {
    const index = list.indexOf(...list.filter((obj) => obj.id === id));
    if (index === 0) return;
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  function handleClick() {
    setList([
      ...list,
      { id: nextId, company: '', role: '', date: '', description: '' },
    ]);
    nextId++;
  }

  function handleUpClick(id) {
    const index = list.indexOf(...list.filter((obj) => obj.id === id));
    if (index > 0) {
      const newList = [...list];
      const element = newList[index];
      newList.splice(index, 1);
      newList.splice(index - 1, 0, element);
      setList(newList);
    }
  }

  function handleDownClick(id) {
    const index = list.indexOf(...list.filter((obj) => obj.id === id));
    if (index < list.length - 1) {
      const newList = [...list];
      const element = newList[index];
      newList.splice(index, 1);
      newList.splice(index + 1, 0, element);
      setList(newList);
    }
  }

  return (
    <div className='card'>
      <h1>Practical Experience</h1>
      {status === 0 ? (
        <>
          {list.map((obj) => (
            <Practical
              status={status}
              onData={handleData}
              handleDelete={handleClose}
              handleUpClick={handleUpClick}
              handleDownClick={handleDownClick}
              list={obj}
              key={obj.id}
            />
          ))}
          <button onClick={handleClick}>Add</button>
        </>
      ) : (
        <div className='laboral-info'>
          {list.map((element) => (
            <div key={element.id}>
              <div>{element.company}</div>
              <div>{element.role}</div>
              <div>{element.date}</div>
              <div>{element.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
