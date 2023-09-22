import { useState } from 'react';
import Practical from './Practical';
import { Fragment } from 'react';

let nextId = 1;
const styles = {
  width: '3rem',
  height: '4pt',
};

export default function PracticalExp({ status, currentColor }) {
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
    <div className="card">
      {status === 0 ? (
        <>
          <div className="title-container filling">
            <h1>Practical Experience</h1>
          </div>
          {list.map((obj, i) => (
            <Fragment key={obj.id}>
              <Practical
                status={status}
                onData={handleData}
                handleDelete={handleClose}
                handleUpClick={handleUpClick}
                handleDownClick={handleDownClick}
                list={obj}
                key={obj.id}
              />
              {i != list.length - 1 && <hr></hr>}
            </Fragment>
          ))}
          <button onClick={handleClick}>Add</button>
        </>
      ) : (
        <div className="laboral-info">
          <div className="title-container">
            <div
              className="dash"
              style={{ ...styles, backgroundColor: currentColor }}
            ></div>
            <h1>Practical Experience</h1>
          </div>
          {list.map((element) => (
            <div className="practical-exp" key={element.id}>
              <div className="title">{element.company}</div>
              <div className="content">
                <div>{element.role}</div>
                <div>{element.date}</div>
              </div>
              <div>{element.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
