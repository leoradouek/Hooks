import BlogList from './BlogList'
import useFetch  from "./useFetch"

function Home() {  
  const { data : blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')
  // data: blogs - means grab the data but call it 'blogs'

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs)
  // }
 
  return(
    <div className="home">
      {isLoading && <div>Loading...</div>}
      { error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="Recent Blogs"/>}
      {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Mario')} title="Mario's blogs"/> */}
    </div>
  )
}

export default Home


/* useEffect:
runs for every render - unless include dependency array
  [] = only runs after initial render
  [blogs] = runs if change to blogs
*/