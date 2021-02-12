import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CookieProvider } from './Contexts/CookieContext/cookieContext';
import { BlogProvider } from './Contexts/BlogContext/BlogContext';
import { CommentProvider } from './Contexts/Comments/commentContext';
import { LikeProvider } from './Contexts/LikeContext/likeContext';
import { HashtagProvider } from './Contexts/HashtagContext/hashtagContext';
ReactDOM.render(
	<BlogProvider>
		<BrowserRouter>
			<CookieProvider>
				<CommentProvider>
					<LikeProvider>
						<HashtagProvider>
							<App />
						</HashtagProvider>
					</LikeProvider>
				</CommentProvider>
			</CookieProvider>
		</BrowserRouter>
	</BlogProvider>,
	document.getElementById('root'),
);
