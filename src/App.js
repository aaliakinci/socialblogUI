import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HomePage from './Views/HomePage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BlogDetail from './Views/BlogDetailPage';
import Login from './Views/Login';
import Register from './Views/Register';
import UserDetail from './Views/UserDetail'
import Profile from './Components/Profile/index'
import TextEditor from './Components/TextEditor';
import { Switch, Route } from 'react-router-dom';
import UserPage from './Views/UserPage';
import HashtagArticle from './Components/HashtagArticle';
function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/profile" component={Profile} />
				<Route path="/" exact component={HomePage} />
				<Route path="/article/:id" exact component={BlogDetail} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/user/:username" component={UserDetail} />
				<Route path="/articles/:username" component={UserPage} />
				<Route path="/write-article" component={TextEditor} />
				<Route path="/hashtag/:id" component={HashtagArticle} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
