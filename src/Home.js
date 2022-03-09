import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div className="error-msg">{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!"  />}
            {isLoading && <div>Loading...</div>}
        </div>
     );
}
 
export default Home;