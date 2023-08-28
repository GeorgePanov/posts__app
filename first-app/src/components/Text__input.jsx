import React, { useState } from "react";

const Text__input = function () {
    const [value, setValue] = useState('Тестовый пример');

    return (
        <div>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}

export default Text__input;