import { useState } from 'react';

function Collapse({text}) {
    const [toggle, setToggle] = useState(true);

    return (
        <div className="collapse">
            <div className={toggle ? 'active' : 'hidden'}>
                <p>{text}</p>
            </div>
            <button type="button" onClick={() => setToggle(!toggle)}>{toggle ? 'Скрыть ˄' : 'Подробнее ˅'}</button>
        </div>
    )
}

export default Collapse