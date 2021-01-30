
import './App.css';
import HomePage from './Views/HomePage'; 
import Header from './Components/Header';
import Footer from './Components/Footer';
import BlogDetail from './Views/BlogDetailPage';


function App() {
  return (
    <>
			<Header/>
      <HomePage/>
			{/* <BlogDetail/> */}
			<Footer />
    </>
  );
}

export default App;
