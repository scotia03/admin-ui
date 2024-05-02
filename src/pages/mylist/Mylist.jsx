import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/Mydatatable";
import "./mylist.scss";

const Mylist = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="mydatatable">
          <Mydatatable type="order" aspect={2/1} />
        </div>
      </div>
    </div>
  );
};

export default Mylist;