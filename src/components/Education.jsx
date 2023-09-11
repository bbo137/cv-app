import Input from './Input';
import PropTypes from 'prop-types';

export default function Education(props) {
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
    <div className='education'>
      <button onClick={handleUpClick}>up</button>
      <button onClick={handleDownClick}>down</button>
      <button onClick={handleDelete}>x</button>
      <Input
        className='input'
        text={props.list.school}
        handleChange={handleChange}
        type='text'
        id={'school'+props.list.id}
        label='School'
        autocomplete='on'
        placeholder='Academy of Learning and Development'
      />
      <Input
        className='input'
        text={props.list.grade}
        handleChange={handleChange}
        type='text'
        id={'grade'+props.list.id}
        label='Grade'
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
    </div>
  );
}

Education.propTypes = {
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
};
