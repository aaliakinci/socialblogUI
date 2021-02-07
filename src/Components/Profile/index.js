import { useState, useRef } from 'react'
import Editable from "./Editable";

function Profile() {
    // State for the input
    const inputRef = useRef();
    const [task, setTask] = useState("");

    /*
      Enclose the input element as the children to the Editable component to make it as inline editable.
    */
    return (
        <Editable
            text={task}
            placeholder="Write a task name"
            type="input"
            childRef={inputRef}
        >
            <input
                id="name"
                ref={inputRef}
                type="text"
                name="task"
                placeholder="Write a task name"
                value={task}
                onChange={e => setTask(e.target.value)}
            />
        </Editable>
    );
}

export default Profile;