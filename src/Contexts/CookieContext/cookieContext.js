import { createContext } from 'react';
import cookie from 'js-cookie';

const CookieContext = createContext({
  isCookie: ()=>{},
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
	const values = {
		setUserCookie,
		isCookie,
	};

	return <CookieContext.Provider value={values}>{children}</CookieContext.Provider>;
};

export default CookieContext;
