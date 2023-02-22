import * as React from "react";
import "./Button.css";

type ButtonProps = {
  onClick: Function;
  text: string;
  className?: string;
  type?: any;
};

const Button = ({
  onClick = () => {},
  text,
  className,
  type = "button",
}: ButtonProps) => {
  const handleClick: any = (e: MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button className={`button ${className}`} onClick={handleClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
