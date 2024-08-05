import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <ul className="nav justify-content-center flex-sm-row">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/all"
                style={({ isActive }) => ({
                  color: isActive
                      ? "#B100B1"
                      : "#6597E6",
              })}
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fsd"
               style={({ isActive }) => ({
                color: isActive
                    ? "#B100B1"
                    : "#6597E6",
            })}>
                Full Stack Development
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/devops"
               style={({ isActive }) => ({
                color: isActive
                    ? "#B100B1"
                    : "#6597E6",
            })}>
                DevOps
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aiandml"
               style={({ isActive }) => ({
                color: isActive
                    ? "#B100B1"
                    : "#6597E6",
            })}>
                AI and ML
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Career"
               style={({ isActive }) => ({
                color: isActive
                    ? "#B100B1"
                    : "#6597E6",
            })}>
                Career
              </NavLink>
            </li>
          </ul>
        </div>
        <hr />
        <br />
      </div>
    </>
  );
};
export default NavBar;