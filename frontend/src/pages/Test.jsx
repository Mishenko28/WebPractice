import React, { useEffect, useRef, useState } from "react";

export default function Test() {
    const [toggle, setToggle] = useState(false);
    const myRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (myRef.current && !myRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="test">
            <div ref={myRef}>
                <button onClick={() => setToggle(!toggle)}>Click Me</button>
                {toggle &&
                    <ul>
                        <li>Apple</li>
                        <li>Banana</li>
                        <li>Grapes</li>
                        <li>Orange</li>
                        <li>Mango</li>
                        <li>Strawberry</li>
                    </ul>
                }
            </div>
        </div>
    );
}
