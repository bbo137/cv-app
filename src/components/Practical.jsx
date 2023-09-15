import Input from "./Input";
import PropTypes from 'prop-types';

export default function Practical(props) {
  function handleChange(e, label) {
    props.onData(e, label, props.list.id);
  }

  function handleDelete() {
    props.handleDelete(props.list.id);
  }

  function handleUpClick() {
    props.handleUpClick(props.list.id);
  }

  function handleDownClick() {
    props.handleDownClick(props.list.id);
  }

  return (
    <div className='laboral'>
      <button onClick={handleUpClick}>up</button>
      <button onClick={handleDownClick}>down</button>
      <button onClick={handleDelete}>x</button>
      <Input
        className='input'
        text={props.list.company}
        handleChange={handleChange}
        type='text'
        id={'company'+props.list.id}
        label='Company'
        autocomplete='on'
        placeholder='Nuro'
      />
      <Input
        className='input'
        text={props.list.role}
        handleChange={handleChange}
        type='text'
        id={'role'+props.list.id}
        label='Role'
        autocomplete='on'
        placeholder='Software Engineer'
      />
      <Input
        className='input'
        text={props.list.date}
        handleChange={handleChange}
        type='text'
        id={'date'+props.list.id}
        label='Date'
        autocomplete='on'
        placeholder='1970'
      />
      <Input
        className='input'
        text={props.list.description}
        handleChange={handleChange}
        type='text'
        id={'description'+props.list.id}
        label='Description'
        autocomplete='on'
        placeholder=''
      />
    </div>
  );
}

Practical.propTypes = {
  handleChange: PropTypes.func,
  onData: PropTypes.func,
  handleDelete: PropTypes.func,
  handleUpClick: PropTypes.func,
  handleDownClick: PropTypes.func,
/*   list: PropTypes.list.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    school: PropTypes.string,
    grade: PropTypes.string,
    date: PropTypes.string,
  })), */
}