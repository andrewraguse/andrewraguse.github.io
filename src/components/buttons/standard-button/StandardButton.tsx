import './StandardButton.scss';

interface Props {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  disableButton?: boolean;
  addArrowIcon?: boolean;
  onClick?: () => void;
  invert?: boolean;
  animation?: string;
}

function StandardButton({
  children,
  type = 'button',
  disableButton = false,
  addArrowIcon = false,
  onClick = () => {},
  invert = false,
  animation = '',
}: Props) {
  return (
    <button
      type={type}
      className={`btn standard-btn standard-btn${
        invert ? '' : '-non'
      }-inverted rounded-5 ${animation}`}
      disabled={disableButton}
      onClick={onClick}
    >
      <div className="button-text-wrapper">
        <span className="button-text">{children}</span>
        {addArrowIcon && arrowButtonSVG}
      </div>
    </button>
  );
}

const arrowButtonSVG = (
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
);

export default StandardButton;
