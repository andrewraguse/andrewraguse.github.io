import './TogglerIcon.scss';
interface Props {
  theme: string;
}

function TogglerIcon({ theme }: Props) {
  return (
    <button
      className="navbar-toggler collapsed d-flex d-sm-none flex-column justify-content-around"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className={`toggler-icon ${theme} top-bar`}></span>
      <span className={`toggler-icon ${theme} middle-bar`}></span>
      <span className={`toggler-icon ${theme} bottom-bar`}></span>
    </button>
  );
}

export default TogglerIcon;
