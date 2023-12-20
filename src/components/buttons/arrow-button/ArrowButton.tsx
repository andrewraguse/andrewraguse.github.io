import "./ArrowButton.scss";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  children: string;
}

function ArrowButton({ link, children }: Props) {
  return (
    <Link to={link}>
      <button
        type="button"
        className="btn btn-outline-secondary rounded-5 animate__animated animate__slideInUp"
      >
        <div className="icon-button-text">
          <span id="about-me-button-text">{children}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </div>
      </button>
    </Link>
  );
}

export default ArrowButton;
