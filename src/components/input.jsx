import PropTypes from "prop-types";

export default function Input({ label, handleChange }) {
  return (
    <>
      <label htmlFor={label.toLowerCase()} className="sr-only">
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        type="number"
        onChange={handleChange}
        className="rounded shadow"
        placeholder={label}
      />
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
