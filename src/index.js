import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CookieProvider } from './Contexts/CookieContext/cookieContext';
import { BlogProvider } from './Contexts/BlogContext'
ReactDOM.render(
	<BlogProvider>
		<BrowserRouter>
		<CookieProvider>
	 	<App />
		</CookieProvider>
		</BrowserRouter>
	</BlogProvider>,
	document.getElementById('root'),
);

