import { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import BlogContext from '../BlogContext/BlogContext';
const UserInfoContext = createContext({});

export const UserInforProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGenter] = useState(false);

    const values = {
        name,
        setName,
        surname,
        setSurname,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        gender,
        setGenter
    }

    return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
}

export default UserInfoContext;






