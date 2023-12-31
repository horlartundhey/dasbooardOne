import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material"
import "./navbar.scss"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined  className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={()=> dispatch({type: "TOGGLE"})} />            
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />          
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />            
            <div className="counter">1</div>         
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />   
            <div className="counter">2</div>         
          </div>
          <div className="item">
            <ListOutlined className="icon" />            
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/3063362/pexels-photo-3063362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="avatar" />          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar