import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/Mydatatable";


const MyList = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order"/>
          <Widget type="earning"/>
        </div>
        <Mydatatable />
        
      </div>
    </div>
  );
};

export default MyList;