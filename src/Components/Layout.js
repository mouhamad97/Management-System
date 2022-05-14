import { Link, Outlet } from "react-router-dom";
import './Layout.css'


const Layout = () => {
  return (
    <div >
      <nav>
        <ul>
          <li>
            <Link to="/clients">Clients Page</Link>
          </li>
          <li>
            <Link to="/Transactions">Transactions Page</Link>
          </li>
          <li>
            <Link to="/Maintenance">Maintenance Page</Link>
          </li>

       
        </ul>
      </nav>
      <hr />
      {/* An <Outlet> renders whatever child route is currently active*/}
      <Outlet />
    </div>
  );
};

export default Layout;