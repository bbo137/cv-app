import Input from './Input';
import PropTypes from 'prop-types';

const inputs = [{label:'School', placeholder: 'Academy of Learning and Development'},
                  {label:'Grade', placeholder: 'Software Engineer'},
                  {label:'Date', placeholder: '1970'},
                  {label:'Gpa', placeholder: '4'},
                  {label:'Description', placeholder: ''},
];

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
    <div className='education subcard'>
      <div className='button-container'>
        <button className='button-up' onClick={handleUpClick}></button>
        <button className='button-down' onClick={handleDownClick}></button>
        <button className='button-delete' onClick={handleDelete}></button>
      </div>
     
      {inputs.map((input) => {
        return(
          <Input
            key={input.label+props.list.id}
            className='input'
            text={props.list[input.label.toLowerCase()]}
            handleChange={handleChange}
            type='text'
            id={input.label+props.list.id}
            label={input.label}
            placeholder={input.placeholder}
          />
        )
      })}
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
