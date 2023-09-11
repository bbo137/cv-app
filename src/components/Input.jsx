import PropTypes from 'prop-types';

export default function Input(props) {

  return (
    <div className='input'>
      <label>
        {props.label}
        <input
          value={props.text}
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          onChange={(e) => props.handleChange(e, props.label)}
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  list: PropTypes.array,
};
