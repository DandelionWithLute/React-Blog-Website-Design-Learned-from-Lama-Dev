import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" styple={{display:"none"}} />
          </div>
            <label>Username</label>
            <input type='text' placeholder="Safak"/>
            <label htmlFor="">Email</label>
            <input type='email' placeholder="Safak@gmail.com"/>
            <label htmlFor="">Password</label>
            <input type='password'/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />      
    </div>
  )
}
