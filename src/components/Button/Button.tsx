import "./button.css";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  className?: string | undefined;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
