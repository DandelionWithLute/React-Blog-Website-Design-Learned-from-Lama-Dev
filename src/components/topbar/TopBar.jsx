import './topbar.css'
import { Link } from "react-router-dom"

export default function TopBar() {
  const user = false;
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
          <li className='topListItem'>
            <Link className='link' to="/">HOME</Link>
          </li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>
            <Link className='link' to="/write">WRITE</Link></li>
          <li className='topListItem'>{ user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img
              className='topImg'
              src='https://cdn.pixabay.com/photo/2022/10/10/08/28/insect-7511200_960_720.jpg'
              alt=''
            />

          ) : (
            <ul className='topList'>
              <li className='topListItem'>
              <Link className='link' to="/login">LOGIN</Link>
              </li>
              <li className='topListItem'>
              <Link className='link' to="/register">REGISTER </Link>
              </li>
            </ul>
            )
        }
        <i className='topSearchIcon fas fas-search'></i>
      </div>
    </div>
  )
}
