import { useState } from 'react';
import Input from './Input';
import { Fragment } from 'react';

const inputs = [
  { type: 'text', id: 'name', label: 'Name', placeholder: 'John Doe' },
  {
    type: 'text',
    id: 'summary',
    label: 'Summary',
    placeholder:
      'Results-driven software developer with 5 years of experience in developing and maintaining software applications. Proficient in Java and Python programming languages. Skilled in project management and team collaboration. Seeking to leverage my technical and leadership skills to grow in the role of Senior Software Developer at XYZ company',
  },
  {
    type: 'email',
    id: 'email',
    label: 'Email',
    placeholder: 'user@domain.com',
  },
  {
    type: 'text',
    id: 'phone',
    label: 'Phone number',
    placeholder: '555-555-5555',
  },
  {
    type: 'url',
    id: 'website',
    label: 'Website',
    placeholder: 'www.example.com',
  },
  {
    type: 'text',
    id: 'location',
    label: 'Location',
    placeholder: 'Anytown, USA',
  },
  { type: 'url', id: 'github', label: 'Github', placeholder: 'user123' },
  {
    type: 'url',
    id: 'linkedin',
    label: 'LinkedIn',
    placeholder: 'linkedin.com/in/user123',
  },
];

export default function GeneralInfo({ status, currentColor }) {
  const [state, setState] = useState({
    name: '',
    summary: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    github: '',
    linkedin: '',
  });

  function handleChange(e, type, id) {
    setState((prevState) => ({ ...prevState, [id]: e.target.value }));
  }

  return (
    <div className="card">
      {status === 0 ? (
        <div className="input-container filling">
          <h1>General Information</h1>
          {inputs.map((input) => {
            return (
              <Input
                key={input.id}
                className="input"
                text={state[input.id]}
                handleChange={handleChange}
                type={input.type}
                id={input.id}
                label={input.label}
                placeholder={input.placeholder}
              />
            );
          })}
        </div>
      ) : (
        <div className="general-info">
          <h1 className={'info name'} style={{ color: currentColor }}>
            {state.name}
          </h1>
          <div className={'info summary'}>{state.summary}</div>
          <div className="top-bar">
            {inputs
              .filter((input) => input.id != 'name' && input.id != 'summary')
              .map((input) => {
                return (
                  state[input.id].length === 0 ||
                  (input.id === 'phone' || input.id === 'location' ? (
                    <div key={input.id} className={'info ' + input.id}>
                      {state[input.id]}
                    </div>
                  ) : (
                    <Fragment key={input.id}>
                      {input.id === 'github' ? (
                        <a
                          key={input.id}
                          className={'info ' + input.id}
                          href={'www.github.com/' + state[input.id]}
                        >
                          {state[input.id]}
                        </a>
                      ) : (
                        <a
                          key={input.id}
                          className={'info ' + input.id}
                          href={state[input.id]}
                        >
                          {state[input.id]}
                        </a>
                      )}
                    </Fragment>
                  ))
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
