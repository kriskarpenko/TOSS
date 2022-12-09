const TextInput = ({
  name,
  id = name,
  isMultiLine,
  label,
  placeholder,
  type = "text",
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {!isMultiLine ? (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <textarea
          id={id}
          rows={5}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default TextInput;
