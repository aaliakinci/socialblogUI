import { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../Consts/consts'

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const articles = axios.get(`${API_BASE_URL}/articles`);
        articles.then(res => { return res })
            .then(data => {
                console.log(data.data)
                setArticles(data.data)
            })

    }, [setArticles]);

    const values = {
        articles,
        setArticles
    }

    return (
        <BlogContext.Provider value={values}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;