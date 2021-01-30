
import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './index.css'
//import BlogPage from './Components/BlogPage/index'
import HomePage from './Components/HomePage/index';
 
import Header from './Components/Header';
import Footer from './Components/Footer';
import BlogDetail from './Components/BlogDetailPage';


function App() {
  return (
    <>
			<Header/>
      {/* <HomePage/> */}
			<BlogDetail/>
			<Footer />
    </>
  );
}

export default App;
