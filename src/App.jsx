 
 
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks , setBookmarks]=useState([])
  const [times, setTimes]= useState(0)

  const handleAddToMark = (blog)=>{
   const NewBookmarks = [...bookmarks , blog]
   setBookmarks(NewBookmarks)
  }
  const handleMarkRead = ( id,time)=>{
    // console.log('click here',time)
    const newTime = times+ time;
    setTimes(newTime);
    // console.log(id)
    
    const LastBookMark = bookmarks.filter(bookmark => bookmark.id !==id)
    setBookmarks(LastBookMark);
  }

  return (
     <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
      <Blogs
      handleMarkRead={handleMarkRead}
       handleAddToMark={handleAddToMark}></Blogs>
       <Bookmarks times={times}  bookmarks={bookmarks}></Bookmarks>
      </div>
     </div>
  )
}

export default App
