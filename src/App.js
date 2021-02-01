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
import { Switch, Route } from 'react-router-dom';
function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/article/:id" exact component={BlogDetail} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/user/:username" component={UserDetail} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
