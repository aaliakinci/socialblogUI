import React, { useContext } from 'react'
import Card from '../../Components/Card'
import Sidebar from '../../Components/Sidebar'
import Banner from '../../Components/Banner';
import MainButton from '../../Components/MainButton'
import './homepage.css'
<<<<<<< HEAD
import axios from 'axios';
import BlogContext from '../../Contexts/BlogContext/BlogContext';
=======
import BlogContext from '../../Contexts/BlogContext';
>>>>>>> main



export default function HomePage() {
<<<<<<< HEAD
    const { articles } = useContext(BlogContext);
    const [userName, setUsername] = useState([]);
    useEffect(() => {
        const getUsername = async (id) => {
            const url = `http://167.99.132.119:4000/articles/byUser/${id}`;
            const response = await axios(url);
            const data = response.data;
            data.map(d => setUsername(d.user[0].username))
        }
        getUsername('6015bdcc9a4ddc4b16d15a52');
    });

    return (
=======
    const { articles, setArticles } = useContext(BlogContext);
     return (
>>>>>>> main
        <>
            <Banner />
            <section className="blog-posts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="all-blog-posts">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {articles.length && articles.map(article => {
<<<<<<< HEAD
                                            return <Card key={article._id} id={article._id} title={article.title} description={article.description} content={article.content} createAt={article.createAt} user={article.user_id} />
=======
                                            return <Card key={article._id} id={article._id} title={article.title} description={article.description} content={article.content} createAt={article.createAt} user={article.user} />
>>>>>>> main
                                        })}
                                    </div>
                                    <div className="col-lg-12" >
                                        <MainButton />
                                    </div >
                                </div >
                            </div >
                        </div >
                        <div className="col-lg-4 col-12">
                            <Sidebar />
                        </div>
                    </div >
                </div >
            </section >
        </>
    )
}