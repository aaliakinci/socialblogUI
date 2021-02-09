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
        <section {...props} >
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, type)}
                    style={{width:'100%'}}
                >
                    {children}
                </div>
            ) : (
                <div
                    onClick={() => setEditing(true)} style={{textAlign:'left',width:'100%'}}
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