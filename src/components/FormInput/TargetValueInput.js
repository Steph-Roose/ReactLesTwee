import './TargetValueInput.css';
import React from "react";

function TargetValueInput({title, type, id, name, className, value, setValue}) {
    return (
        <label htmlFor={id}>
            {title}

            <input
                type={type}
                id={id}
                name={name}
                className={className}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
}

export default TargetValueInput;