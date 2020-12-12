import { useState } from "react";

export default initialValue => {
    const [values, setValues] = useState(initialValue);
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };
    const reset = () => {
        setValues({ username: '' });
    }
    return [values, handleChange, reset];
};

