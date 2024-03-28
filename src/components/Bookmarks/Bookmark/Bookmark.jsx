import PropTypes from 'prop-types';

const Bookmark = ({ bookmark}) => {
    const { title } = bookmark
    return (


        <div className='bg-slate-500 p-5 m-3 rounded-xl '>
             
            <h1 className='text-white font-bold'>{title}</h1>
        </div>

    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
  
}

export default Bookmark;