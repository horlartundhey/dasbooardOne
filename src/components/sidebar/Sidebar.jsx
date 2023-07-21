import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import WalletIcon from '@mui/icons-material/Wallet';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">REACADMIN</span>            
            </Link>
        </div>
        <hr />

        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>

                <p className="title">MAIN</p>
                  <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PersonIcon className="icon"/>
                        <span>Users</span>
                    </li>   
                  </Link>                  
                <Link to="/products" style={{textDecoration: "none"}}>  
                    <li>
                        <Inventory2Icon className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>

                <li>
                    <WalletIcon className="icon"/>
                    <span>Orders</span>
                </li>

                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>

                <p className="title">USEFUL</p>

                <li>
                    <AssessmentIcon className="icon"/>
                    <span>Stats</span>
                </li>

                <li>
                    <NotificationsNoneIcon className="icon"/>
                    <span>Notification</span>
                </li>

                <p className="title">SERVICE</p>

                <li>
                    <SettingsSystemDaydreamIcon className="icon"/>
                    <span>System health</span>
                </li>

                <li>
                    <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>

                <li>
                    <SettingsApplicationsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>

                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>

        <div className="bottom">
           <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>

           <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
           {/* <div className="colorOption"></div> */}
        </div>
    </div>
  );
}

export default Sidebar