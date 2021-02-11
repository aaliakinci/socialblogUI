import { useContext, useEffect, useRef, useState } from 'react'
import Editable from "./Editable";
import axios from 'axios'
import UserInfoContext from '../../Contexts/UserInfoContext/UserInfoContext'


function Profile() {
    const [data, setData] = useState([]);
    const { name, surname, username, setUsername, setSurname, setName, email, setEmail, setPhoneNumber, phoneNumber, setPassword, password, gender, setGender } = useContext(UserInfoContext)
    // State for the input
    useEffect(() => {
        const getUser = async () => {
            const data = await axios(`${process.env.REACT_APP_DEPLOY_URL}/users/aliiakinci`)
            const user = data.data[0];
            setData(user);
        }
        getUser();
    }, [setData])
    console.log(data)
    const inputRef = useRef();
    return (
        <div style={{ paddingTop: '150px' }} className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-lg-4 col-sm-6">
                <form action="" style={{ border: '2px solid black', padding: '20px', height: '500px' }} className="card d-flex">
                    <div className="form-group">
                        <label className="d-inline">Name</label>
                        <Editable
                            text={data.name}
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
                        text={data.surname}
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
                        text={data.email}
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
                        text={data.username}
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
                        text={data.password}
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
                        text={data.phoneNumber}
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

