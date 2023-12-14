interface Props {
  children: React.ReactNode;
  id: string;
}

function DefaultTextBox({ children, id }: Props) {
  return (
    <>
      <div className="default-text-box">{children}</div>
    </>
  );
}

export default DefaultTextBox;
