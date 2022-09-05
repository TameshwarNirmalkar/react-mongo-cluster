import "./App.scss";
import { Link, Outlet } from "react-router-dom";
import { HeaderComponent } from "./components/header";
import { FooterComponent } from "./components/footer";

function App() {
  return (
    <div>
      <HeaderComponent />
      {/* <nav>
        <ul>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav> */}
      <div className="content">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
