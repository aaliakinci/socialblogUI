import React, { useState, useEffect } from 'react'

export default function Editable({ childRef, text, type, placeholder, children, ...props }) {
    const [isEditing, setEditing] = useState(false);
    const handleKeyDown = (event, type) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey];

        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    };
    // useEffect(() => {
    //     if (childRef && childRef.current && isEditing === true) {
    //         childRef.current.focus();
    //     }
    // }, [isEditing, childRef]);
    return (
        <section {...props} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, type)}
                    className="d-block" style={{ width: '100%' }}
                >
                    {children}
                </div>
            ) : (
                <div
                    onClick={() => setEditing(true)} style={{ width: '100%', marginLeft: 'auto' }}
                >
                    <span>
                        {text || placeholder}
                    </span>
                </div>
            )
            }
        </section>
    )
}