import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./NavBar.scss";

interface Props {
  children: React.ReactNode;
  theme: string;
}

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-transparent"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
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
