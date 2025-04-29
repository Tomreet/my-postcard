import React from 'react';
import './LoginImput.css'
const LoginImput = ({
    label,
    type,
    value,
    set,}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
                <input
                type={type}
                value={value}
                onChange={(e) => set(e.target.value)}
                required
                />
        </div>
    );
};

export default LoginImput;