import PropTypes from "prop-types";

export default function Input({ label, value, handleChange }) {
  return (
    <div>
      <label htmlFor={label.toLowerCase()} className="sr-only">
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        type="number"
        onChange={handleChange}
        className="rounded shadow"
        placeholder={label}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
