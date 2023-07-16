import React, {useState} from "react";
const FormInput = () => {
    const [data, updateData] = useState({
            text: ""
        }
    )
    const handleInput = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        updateData((prev: any) => {
            return {...prev, [name]: value}

        })
    }
    return (
        <div>
            <input
                className="form-input-text"
                name="text"
                type="text"
                required={true}
                onChange={handleInput}
            />
            <p className="text-white font-bold text-2xl"> {data.text}</p>
        </div>

    );
};

export default FormInput;
