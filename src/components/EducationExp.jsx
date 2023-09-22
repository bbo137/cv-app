import { useState } from 'react';
import Education from './Education';
import { Fragment } from 'react';

let nextId = 1;
const styles = {
  width: '3rem',
  height: '4pt',
};

export default function EducationExp({ status, currentColor }) {
  const [list, setList] = useState([
    { id: 0, school: '', grade: '', date: '', gpa: '', description: ''},
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
    setList([...list, { id: nextId, school: '', grade: '', date: '', gpa: '', description: ''}]);
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
      {status === 0 ? (
        <>
          <div className='title-container filling'>
            <h1>Educational Experience</h1>
          </div>
          {list.map((obj, i) => (
            <Fragment key={obj.id}>
              <Education
                  status={status}
                  onData={handleData}
                  handleDelete={handleClose}
                  handleUpClick={handleUpClick}
                  handleDownClick={handleDownClick}
                  list={obj}
                />
              {(i != list.length-1) && <hr></hr>}
            </Fragment>
          ))}
          <button onClick={handleClick}>Add</button>
        </>
      ) : (
        <div className='education-info'>
          <div className='title-container'>
            <div className='dash' style={{...styles, backgroundColor: currentColor}}></div>
            <h1>Educational Experience</h1>
          </div>
          {list.map((element) => (
            <div className='education-exp' key={element.id}>
              <div className='title'>{element.school}</div>
              <div className='content'>
                <div>{element.grade} {(element.gpa.length != 0) && (' - '+element.gpa+' GPA')}</div>
                <div>{element.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
