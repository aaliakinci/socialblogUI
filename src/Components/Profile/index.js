import { useState, useRef } from 'react'
import Editable from "./Editable";

function Profile() {
    // State for the input
    const inputRef = useRef();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGenter] = useState(false);

    return (
        <div style={{ paddingTop: '150px' }} className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-lg-4 col-sm-6">
                <form action="" style={{ border: '2px solid black', padding: '20px', height: '500px' }} className="card d-flex">
                <div className="form-group">
                    <label className="d-inline">Name</label>
                    <Editable
                        text={name}
                        placeholder="Enter your name"
                        type="input"
                        childRef={inputRef}
                    >
                        {/* <label htmlFor="name" className="form-label mr-3">Name</label> */}
                        <input
                            id="name"
                            ref={inputRef}
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            className="form-control"
                            onChange={e => setName(e.target.value)}
                        />
                    </Editable>
                    </div>
                    <Editable
                        className="form-group"
                        text={surname}
                        placeholder="Enter your surname"
                        type="input"
                        childRef={inputRef}
                        style={{ width: '100%' }}
                    >
                        <label htmlFor="name" className="form-label">Surname</label>
                        <input
                            id="surname"
                            ref={inputRef}
                            type="text"
                            name="surname"
                            placeholder="Enter your surname"
                            value={surname}
                            className="form-control"
                            onChange={e => setSurname(e.target.value)}
                        />
                    </Editable>
                    <Editable
                        className="form-group"
                        text={email}
                        placeholder="Enter your email"
                        type="input"
                        childRef={inputRef}
                        style={{ width: '100%' }}
                    >
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            ref={inputRef}
                            type="email"
                            name="email"
                            placeholder="Enter your Email"
                            value={email}
                            className="form-control"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Editable>
                    <Editable
                        className="form-group"
                        text={username}
                        placeholder="Enter your username"
                        type="input"
                        childRef={inputRef}
                        style={{ width: '100%' }}
                    >
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            id="username"
                            ref={inputRef}
                            type="text"
                            name="username"
                            placeholder="Enter your Username"
                            value={username}
                            className="form-control"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Editable>
                    <Editable
                        className="form-group"
                        text={password}
                        placeholder="Enter your password"
                        type="input"
                        childRef={inputRef}
                        style={{ width: '100%' }}
                    >
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            id="password"
                            ref={inputRef}
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            value={password}
                            className="form-control"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Editable>
                    <Editable
                        className="form-group"
                        text={phoneNumber}
                        placeholder="Enter your Phone"
                        type="input"
                        childRef={inputRef}
                        style={{ width: '100%' }}
                    >
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input
                            id="phoneNumber"
                            ref={inputRef}
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter your Phone Number"
                            value={phoneNumber}
                            className="form-control"
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </Editable>
                </form>
            </div>
        </div>
    );
}
export default Profile;

