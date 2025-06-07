
const NavBar = (props) => {
  return (
<>
<nav style={{justifyContent:"end"}} className={`navbar navbar-expand-lg flex navbar-${props.mode} bg-${props.mode}` }>
<div className={`form-check mx-3  form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `}>
  <input className="form-check-input"  type="checkbox" value="" id="checkNativeSwitch" switch onClick={props.toggleMode} />
  <label className="form-check-label" htmlFor="checkNativeSwitch">
    Dark Mode
  </label>
</div>
</nav>
</>
  );
}

export default NavBar;