import { useRef, useContext, useState, useEffect } from 'react'
import Editable from "./Editable";
import './profile.css';
import img1 from '../../assets/images/comment-author-01.jpg';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import BlogContext from '../../Contexts/BlogContext/BlogContext';


function Profile() {
    const { userFromCookie } = useContext(CookieContext);
    const { getUserbyUsername } = useContext(BlogContext);
    const [data, setData] = useState({});
    const user = userFromCookie('user');
    const username = user.username;
    useEffect(() => {
        const fetchUserInfo = async () => {
            const userInfo = await getUserbyUsername(username);
            setData(userInfo[0]);
        }
        fetchUserInfo();
    }, [getUserbyUsername, username]);
    const inputRef = useRef();
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '550px' }}>
            <div className="col-12 col-lg-4 col-sm-6">
                <form action="" className="card user-form">
                    <div className="ml-auto mr-auto">
                        <img src={data.profilPicture} alt="" className="user-image img-responsive" />
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
                                value={data.name}
                                className="form-control mt-2"
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
                                value={data.surname}
                                className="form-control mt-2"
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
                                value={data.email}
                                className="form-control mt-2"
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
                                // value={userInfo.phoneNumber}
                                className="form-control mt-2"
                            />
                        </Editable>
                    </div>
                    <div className="form-group border-0 p-0 m-0">
                        <label className="d-inline mr-2">Male</label>
                        <input
                            className="d-inline mr-4"
                            type="radio"
                            name="gender"
                            value="male"
                            checked={data.gender === "Kadın"}
                        />
                        <label className="d-inline mr-2">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={data.gender === "Erkek"}
                        />
                    </div>
                </form>
            </div>
        </div >
    );
}
export default Profile;

