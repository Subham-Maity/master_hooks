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
        className="text-sky-800 p-1"
        id="name"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <p className="text-2xl font-bold mt-2 text-gray-200">
        You typed: {input}
      </p>
    </div>
  );
};

export default FormInput;
