import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img 
      className="postImg"
        src='https://cdn.pixabay.com/photo/2023/01/12/07/19/rat-7713508_960_720.jpg'
        alt=''
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          span post title
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc"></p>
    </div>
  )
}
