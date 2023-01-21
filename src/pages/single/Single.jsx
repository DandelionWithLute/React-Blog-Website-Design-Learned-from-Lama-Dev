import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/singlePost"
import "./single.css"

export default function Singles() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}
