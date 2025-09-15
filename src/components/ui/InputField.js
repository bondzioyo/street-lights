const InputField = ({
  label,
  type = "number",
  placeholder,
  value,
  defaultValue,
  min,
  onChange,
  className = "inputarea",
}) => {
  return (
    <div className={className}>
      {label && <div className="inputdescription">{label}</div>}
      <input
        className="inputvalue"
        type={type}
        placeholder={placeholder}
        min={min}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
