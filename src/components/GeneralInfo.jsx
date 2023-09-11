import { useState } from 'react';
import Input from './Input';

export default function GeneralInfo({ status }) {
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  function handleChange(e, type) {
    switch (type) {
      case 'Name':
        setName(e.target.value);
        break;

      case 'Summary':
        setSummary(e.target.value);
        break;

      case 'Email':
        setEmail(e.target.value);
        break;

      case 'Phone number':
        setPhone(e.target.value);
        break;

      case 'Website':
        setWebsite(e.target.value);
        break;

      case 'Location':
        setLocation(e.target.value);
        break;

      case 'Github':
        setGithub(e.target.value);
        break;

      case 'LinkedIn':
        setLinkedin(e.target.value);
        break;

      default:
        console.log(e);
        console.log('no input type');
    }
  }

  return (
    <div className="card">
      <h2>General Information</h2>
      {status === 0 ? (
        <div className="input-container">
          <Input
            className="input"
            text={name}
            handleChange={handleChange}
            type="text"
            id="name"
            label="Name"
            autocomplete="on"
            placeholder="John Doe"
          />
          <Input
            className="input"
            text={summary}
            handleChange={handleChange}
            type="text"
            id="summary"
            label="Summary"
            autocomplete="on"
            placeholder="Results-driven software developer with 5 years of experience in developing and maintaining software applications. Proficient in Java and Python programming languages. Skilled in project management and team collaboration. Seeking to leverage my technical and leadership skills to grow in the role of Senior Software Developer at XYZ company"
          />
          <Input
            className="input"
            text={email}
            handleChange={handleChange}
            type="email"
            id="email"
            label="Email"
            autocomplete="on"
            placeholder="user@domain.com"
          />
          <Input
            className="input"
            text={phone}
            handleChange={handleChange}
            type="tel"
            id="phone"
            label="Phone number"
            autocomplete="on"
            placeholder="555-555-5555"
          />
          <Input
            className="input"
            text={website}
            handleChange={handleChange}
            type="url"
            id="website"
            label="Website"
            autocomplete="on"
            placeholder="www.example.com"
          />
          <Input
            className="input"
            text={location}
            handleChange={handleChange}
            type="text"
            id="location"
            label="Location"
            autocomplete="on"
            placeholder="Anytown, USA"
          />
          <Input
            className="input"
            text={github}
            handleChange={handleChange}
            type="url"
            id="github"
            label="Github"
            autocomplete="on"
            placeholder="user123"
          />
          <Input
            className="input"
            text={linkedin}
            handleChange={handleChange}
            type="url"
            id="linkedin"
            label="LinkedIn"
            autocomplete="on"
            placeholder="linkedin.com/in/user123"
          />
        </div>
      ) : (
        <div className="general-info">
          <div className="info name">{name}</div>
          <div className="info summary">{summary}</div>
          <div className="info email">{email}</div>
          <div className="info phone">{phone}</div>
          <div className="info website">{website}</div>
          <div className="info location">{location}</div>
          <div className="info github">{github}</div>
          <div className="info linkedin">{linkedin}</div>
        </div>
      )}
    </div>
  );
}
