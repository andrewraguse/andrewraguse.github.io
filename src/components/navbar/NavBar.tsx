import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./NavBar.scss";
import TogglerIcon from "../toggler-icon/TogglerIcon";

interface Props {
  theme: string;
}

function NavBar({ theme }: Props) {
  return (
    <>
      <nav
        className={`navbar navbar-${theme} navbar-expand-sm bg-transparent`}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <TogglerIcon />
          <div
            className={`collapse navbar-collapse justify-content-center navbar-collapse-${theme}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavButton to={"/"}>home</NavButton>
              <NavButton to={"/about"}>about</NavButton>
              <NavButton to={"/resume"}>resume</NavButton>
              <NavButton to={"/photography"}>photography</NavButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

interface NavButtonProps {
  to: string;
  children: string;
}

function NavButton({ to, children }: NavButtonProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link
      to={to}
      className={isActive ? "nav-link active" : "nav-link"}
      aria-current="page"
    >
      {children}
    </Link>
  );
}

export default NavBar;
