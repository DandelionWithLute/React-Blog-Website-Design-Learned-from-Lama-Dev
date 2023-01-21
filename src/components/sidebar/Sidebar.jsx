import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <span className="sidebarTitle">ABOUT ME</span>
      <div className="sidebarItem">
        
        <img 
        src ='https://cdn.pixabay.com/photo/2023/01/01/23/37/woman-7691013__340.jpg'
        alt =''
        />
        <p>
          My own information.
        </p>
      </div>
      <span className="sidebarTitle">CATEGORIES</span>
      <div className="sidebarItem">
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarItem">
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
