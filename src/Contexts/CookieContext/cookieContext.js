import { createContext } from 'react';
import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';

const CookieContext = createContext({
	userFromCookie: () => {},
	isCookie: () => {},
	setUserCookie: () => {},
});

export const CookieProvider = ({ children }) => {
	const setUserCookie = (name, token) => {
		cookie.set(name, `Bearer ${token}`);
	};
	const isCookie = (name) => {
		const mycookie = cookie.get(name);
		if (!mycookie) return 0;
		return 1;
	};
	const userFromCookie = (name) => {
		const bearerToken = cookie.getJSON(name);
			const token = bearerToken.replace('Bearer ', '');
			const user = jwt_decode(token);
			return user;
	};
	const removeCookie = (name) => {
  cookie.remove(name);
	window.location.reload();
	}
	const userAuth = (name) => {
		const bearerToken = cookie.getJSON(name);
		return bearerToken;
	};
	const values = {
		setUserCookie,
		isCookie,
		userFromCookie,
		userAuth,
		removeCookie
	};

	return <CookieContext.Provider value={values}>{children}</CookieContext.Provider>;
};

export default CookieContext;
