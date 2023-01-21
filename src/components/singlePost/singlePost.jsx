import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img
          src='https://cdn.pixabay.com/photo/2023/01/12/18/08/beach-7714610_960_720.jpg'
          alt=''
          className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Autor: <b>Safak</b></span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <div className="singlePostDesc">
            Lorem ipsum dolor sit amet.
          </div>
      </div>
    </div>
  )
}