import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClickButton: () => void;
}
const Button = ({ children, onClickButton }: Props) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onClickButton()}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
