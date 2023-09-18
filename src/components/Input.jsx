import PropTypes from 'prop-types';

export default function Input(props) {

  return (
    <div className='input'>
      <label>
        {props.label}
        <input
          value={props.text || ''}
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          autoComplete='on'
          onChange={(e) => props.handleChange(e, props.label, props.id)}
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  handleChange: PropTypes.func,
  list: PropTypes.array,
};
