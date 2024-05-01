import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/datatable2/Datatable";


const Single = () => { 
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
            <div className="left">
                <div className="editbutton">edit</div>
                <h1 className="title">information</h1>
                <div className="item">
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                    alt="" 
                    className="itemImg"
                    />
                    <div className="details">
                        <h1 className="itemTitle">Jane doe</h1>
                        <div className="detailItem">
                            <span className="itemKey">Emai</span>
                            <span className="itemValue">janedong@gmail.com</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">phone:</span>
                            <span className="itemValue">+1 2345 67 89</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">addres:</span>
                            <span className="itenValue">
                                eton st. 234 garden yd. newyork
                            </span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">country</span>
                            <span className="itemValue">USA</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <Chart aspect={3 / 1} type="order" />
            </div>
        </div>
        <div className="bottom">
            <h1 className="title">last transaction</h1>
            <List />
        </div>
        single
        
      </div>
    </div>
  );
};

export default Single;