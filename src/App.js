import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SideNav from "./Sidenav";
import Topnav from "./Topnav";
import Content from "./Content";

export default function App() {
  return (
    <div className="App">
      <SideNav />
      <Topnav />
      <div className="container">
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}
