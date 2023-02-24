import PropTypes from "prop-types";

export default function Input({ label, value, handleChange }) {
  return (
    <div>
      <label htmlFor={label.toLowerCase()}>{label}</label>
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};
