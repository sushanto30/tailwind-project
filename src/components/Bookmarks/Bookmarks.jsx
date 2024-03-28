import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, times }) => {
    return (
     
           
            
            
            <div className="md:w-1/3 bg-gray-200 ml-3 p-5">
                <div className='bg-purple-400 p-6 text-white font-bold rounded-xl'>
                <h1>Total Reading Time: {times} min</h1>
                </div>
            <h1 className='font-extrabold text-xl'>bookmark:{bookmarks.length}</h1>
            
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}
                ></Bookmark>)
            }
        </div>

    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    times: PropTypes.number
}
export default Bookmarks;