 
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

 

const Blogs = ({handleAddToMark ,handleMarkRead}) => {
    const [blogs , setBlogs ]= useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1>blogs:{blogs.length}</h1>
            {
                blogs.map((blog) => <Blog handleAddToMark={handleAddToMark} 
                    key={blog.id} 
                    blog={blog}
                    handleMarkRead={handleMarkRead}
                    ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleAddToMark:PropTypes.func,
    handleMarkRead:PropTypes.func
}

export default Blogs;