import {
  Link
} from "react-router-dom";
const NavBar = (props) => {
  return (
    <>
      <nav style={{ justifyContent:"space-evenly" }} className={`navbar navbar-expand-lg flex navbar-${props.mode} bg-${props.mode}`}>
         <Link to="/">Dashboard</Link>
          <Link to="/about">About Us</Link>
          <Link to="/page-1">Page-1</Link>
          <Link to="/page-2">Page-2</Link>
        <div className={`form-check mx-3  form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `}>
          <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="checkNativeSwitch">
            Dark Mode
          </label>
        </div>
      </nav>
    </>
  );
}

export default NavBar;