import React from "react";

const InputsRegister = ({
  type,
  id,
  name,
  rows,
  label,
  checked,
  handleOnChange,
  index,
  required,
}) => {
  return (
    
      <input className="form-control-input" required
        type={type}
        id={id}
        name={name}
        placeholder={label}
        checked={checked}
        onChange={(event) => handleOnChange(index >= 0 ? index : event)}
      />
  );
};

InputsRegister.propTypes = {};

export default InputsRegister