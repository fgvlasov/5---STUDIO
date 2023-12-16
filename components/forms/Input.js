import { useEffect, useRef, useState } from "react";

const Input = ({ type = "text", name, label, isClear = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputElement = useRef(null);

  const onChange = (e) => {
    if (e.target.value) setIsFocused(true);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = (e) => {
    if (!e.target.value) setIsFocused(false);
  };

  const clearInput = () => {
    inputElement.current.value = "";
    setIsFocused(false);
  };

  useEffect(() => {
    if (isClear) {
      clearInput();
    }
  }, [isClear]);

  return (
    <div className={`form-group ${isFocused ? "focused" : ""}`}>
      {type !== "textarea" && (
        <input
          ref={inputElement}
          type={type}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {type === "textarea" && (
        <textarea
          ref={inputElement}
          type={type}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        ></textarea>
      )}
      <label>{label}</label>
      <span className="focus-border" />
    </div>
  );
};

export default Input;
