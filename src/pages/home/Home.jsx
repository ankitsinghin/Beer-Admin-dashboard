import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
        {/* Add the background image tag below */}
        <div
          className="backgroundImage"
          style={{
            backgroundImage: "url(https://w7.pngwing.com/pngs/1001/90/png-transparent-carlsberg-group-beer-carlsberg-export-danish-cuisine-cider-beer-label-logo-alcohol-by-volume-thumbnail.png)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
