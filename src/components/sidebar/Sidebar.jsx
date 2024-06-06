import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <li>
        <DashboardIcon className="icon"/>
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
          <PersonIcon className="icon"/>  
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products">
        <li>
          <AddCardIcon className="icon"/>  
          <span>Products</span>
        </li>
      </Link>
      <li>
        <AddBusinessIcon className="icon"/>
        <span>Orders</span>
      </li>
      <Link to="/categories">
        <li>
          <CategoryIcon className="icon"/>  
          <span>Categories</span>
        </li>
      </Link>
      <p className="title">USER</p>
      <li>
        <AccountBoxIcon className="icon"/>
        <span>Profile</span>
      </li>
      <li>
      <LogoutIcon className="icon"/>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption" onClick={() => dispatch({ type: "LIGHT"})}></div>
    <div className="colorOption" onClick={() => dispatch({ type: "DARK"})}></div>
  </div>
</div>
  );
};

export default Sidebar;