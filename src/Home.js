import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'brady', id: 1},
        {title: 'Welcome Patriots fan!', body: 'lorem ipsum...', author: 'belichick', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'brady', id: 3},
    ]);
    const [name, setName] = useState('anti-duhring')
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('useEffect')
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName('Mateus')}>Change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;