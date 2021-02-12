import { useContext, useEffect, useRef, useState } from 'react'
import Editable from "./Editable";
import axios from 'axios'
import UserInfoContext from '../../Contexts/UserInfoContext/UserInfoContext'
import './profile.css';
import img1 from '../../assets/images/comment-author-01.jpg';

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
    const inputRef = useRef();
    return (
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-lg-4 col-sm-6">
                <form action="" className="card d-flex user-form">
                    <div className="ml-auto mr-auto">
                        <img src={img1} alt="" className="user-image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label mr-3 d-inline">Ad:</label>
                        <Editable
                            text={data.name}
                            className="d-inline"
                            placeholder="Adınızı giriniz"
                            type="input"
                            childRef={inputRef}
                        >
                            <input
                                id="name"
                                ref={inputRef}
                                type="text"
                                name="name"
                                placeholder="Adınızı giriniz"
                                value={name}
                                className="form-control mt-2"
                                onChange={e => setName(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label mr-3 d-inline">Soyad:</label>
                        <Editable
                            className="d-inline"
                            text={data.surname}
                            placeholder="Soyadınızı giriniz"
                            type="input"
                            childRef={inputRef}
                            style={{ width: '100%' }}
                        >
                            <input
                                id="surname"
                                ref={inputRef}
                                type="text"
                                name="surname"
                                placeholder="Soyadınızı giriniz"
                                value={surname}
                                className="form-control mt-2"
                                onChange={e => setSurname(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label d-inline mr-3">Email:</label>
                        <Editable
                            className="d-inline"
                            text={data.email}
                            placeholder="Email adresinizi giriniz"
                            type="input"
                            childRef={inputRef}
                            style={{ width: '100%' }}
                        >
                            <input
                                id="email"
                                ref={inputRef}
                                type="email"
                                name="email"
                                placeholder="Email adresinizi giriniz"
                                value={email}
                                className="form-control mt-2"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label d-inline mr-3">Kullanıcı Adı:</label>
                        <Editable
                            className="d-inline"
                            text={data.username}
                            placeholder="Kullanıcı adınızı giriniz"
                            type="input"
                            childRef={inputRef}
                            style={{ width: '100%' }}
                        >
                            <input
                                id="username"
                                ref={inputRef}
                                type="text"
                                name="username"
                                placeholder="Kullanıcı adınızı giriniz"
                                value={username}
                                className="form-control mt-2"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label d-inline mr-3">Şifre:</label>
                        <Editable
                            className="d-inline"
                            text={data.password}
                            placeholder="Şifrenizi giriniz"
                            type="input"
                            childRef={inputRef}
                            style={{ width: '100%' }}
                        >
                            <input
                                id="password"
                                ref={inputRef}
                                type="password"
                                name="password"
                                placeholder="Şifrenizi giriniz"
                                value={password}
                                className="form-control mt-2"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber" className="form-label d-inline mr-3">Telefon Numarası:</label>
                        <Editable
                            className="d-inline"
                            text={data.phoneNumber}
                            placeholder="Telefon numaranızı giriniz"
                            type="input"
                            childRef={inputRef}
                            style={{ width: '100%' }}
                        >

                            <input
                                id="phoneNumber"
                                ref={inputRef}
                                type="tel"
                                name="phoneNumber"
                                placeholder="Telefon numaranızı giriniz"
                                value={phoneNumber}
                                className="form-control mt-2"
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <select name="gender" id="gender" className="p-2">
                        <option value="--">Cinsiyet Giriniz</option>
                        <option value="Kadın">Kadın</option>
                        <option value="Erkek">Erkek</option>
                    </select>
                </form>
            </div>
        </div>
    );
}
export default Profile;

