import './TextBox.scss';

interface Props {
  children: React.ReactNode;
  theme: string;
  className?: string;
}

function TextBox({ children, theme, className }: Props) {
  return (
    <div
      className={`default-text-box ${theme} animate__animated animate__pulse ${className}`}
    >
      {children}
    </div>
  );
}

export default TextBox;
