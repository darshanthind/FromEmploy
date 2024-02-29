import './headers.css';
import {Outlet,Link} from "react-router-dom";
function Layout() {
    return ( 
        <>
        <nav className="navs">
            <ul>
                <li><Link to="/">Form</Link></li>
                {/* <li><Link to="/">Form</Link></li> */}
                <li><Link to="/Edit">Edit</Link></li>
                <li><Link to="/delete">Delete</Link></li>
                <li><Link to="/table">Table</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
     );
}

export default Layout;