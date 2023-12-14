import "./index.scss";
interface Props {
  children: React.ReactNode;
  theme: string;
}
function TextBox({ children, theme }: Props) {
  return (
    <div
      className={`default-text-box default-text-box-${theme} animate__animated animate__slideInLeft`}
    >
      {children}
    </div>
  );
}

export default TextBox;
