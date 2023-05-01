import { useState } from "react";

type FormInputProps = {
  label: string;
};

const FormInput = ({ label }: FormInputProps) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input
        className="form-input-text"
        id="name"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <p className="form-input-field">You typed: {input}</p>
    </div>
  );
};

export default FormInput;
