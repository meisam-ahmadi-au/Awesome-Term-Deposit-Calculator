import React from "react";
import { styles } from "./button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  className = "",
  disabled = false,
  ...rest
}) => {
  return (
    <div className={styles.wrapper(className)}>
      <button className={styles.button(disabled)} {...rest} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default Button;
