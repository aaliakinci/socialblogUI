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
        <section {...props} style={{ paddingTop: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name" className="mr-2">Name</label>
                    {isEditing ? (
                        <div
                            onBlur={() => setEditing(false)}
                            onKeyDown={e => handleKeyDown(e, type)}
                            className="d-inline"
                        >
                            {children}
                        </div>
                    ) : (
                        <div className="d-inline"
                            onClick={() => setEditing(true)}
                        >
                            <span>
                                {text || placeholder || "Editable content"}
                            </span>
                        </div>
                    )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="mr-2">Name</label>
                    {isEditing ? (
                        <div
                            className="d-inline"
                            onBlur={() => setEditing(false)}
                            onKeyDown={e => handleKeyDown(e, type)}
                        >
                            {children}
                        </div>
                    ) : (
                        <div className="d-inline"
                            onClick={() => setEditing(true)}
                        >
                            <span>
                                {text || placeholder || "Editable content"}
                            </span>
                        </div>
                    )
                    }
                </div>
            </form>
        </section>
    )
}