const SelectField = ({
  label,
  placeholder,
  options = [],
  value,
  defaultValue,
  onChange,
  className = "inputarea",
}) => {
  return (
    <div className={className}>
      {label && <div className="inputdescription">{label}</div>}
      <select
        className="inputselect"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
