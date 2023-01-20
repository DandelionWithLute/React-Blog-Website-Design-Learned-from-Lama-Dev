import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className='topImg'
          src='https://cdn.pixabay.com/photo/2022/10/10/08/28/insect-7511200_960_720.jpg'
          alt=''
        />
        <i className='topSearchIcon fas fas-search'></i>
      </div>
    </div>
  )
}
