import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import './NavBar.scss';
import TogglerIcon from '../buttons/toggler-icon/TogglerIcon';
import NavigationModel from '../../models/NavigationModel';

interface Props {
  theme: string;
  pageNames: NavigationModel[];
}

function NavBar({ theme, pageNames }: Props) {
  return (
    <>
      <nav className={`navbar ${theme} navbar-expand-sm bg-transparent`}>
        <div className="container-fluid">
          <TogglerIcon theme={theme} />
          <div
            className={`collapse navbar-collapse justify-content-center ${theme}`}
            id="navbarNavAltMarkup"
          >
            <div className={`navbar-nav navbar-nav-${theme}`}>
              {pageNames.map((pageName) => (
                <NavButton key={pageName.name} to={pageName.href}>
                  {pageName.name}
                </NavButton>
              ))}
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
      className={isActive ? 'nav-link active' : 'nav-link'}
      aria-current="page"
    >
      {children}
    </Link>
  );
}

export default NavBar;
