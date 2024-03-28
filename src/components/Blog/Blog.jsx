 
import { FaRegBookmark } from "react-icons/fa"
import PropTypes from 'prop-types';

const Blog = ({blog ,handleAddToMark , handleMarkRead}) => {
     const {title, cover_image, author_image ,author_name ,reading_time , posted_date , hashtags, id}= blog;
    //  console.log(title)
    return (
        <div className="space-y-3">
            <img className='w-full' src={cover_image} alt="" />
            <div className='flex items-center justify-between '>
                <div className='mt-4 flex gap-x-3'>
                    <img className='w-12 h-12 rounded-full' src={author_image} alt="" />
                    <div>
                        <p >{author_name}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p>{reading_time}min read</p>
                    <button onClick={()=>handleAddToMark(blog)}> <FaRegBookmark></FaRegBookmark></button>
                    
                </div>
            </div>
             <h1 className='text-2xl font-bold '>{title}</h1>
             <p>
                {
                    hashtags.map((hash, inx) => <span key={inx  }><a href="">{hash}</a></span>)
                }
             </p>
             <button onClick={()=> handleMarkRead( id,reading_time)} className="text-purple-800 font-bold underline">Mark As Read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToMark: PropTypes.func.isRequired,
    handleMarkRead:PropTypes.func
}
export default Blog;