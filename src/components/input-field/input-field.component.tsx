import React from "react";
import { styles } from "./input-field.styles";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  className = "",
  hasError,
  errorMessage,
  ...rest
}) => {
  return (
    <div className={styles.wrapper(className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
        <input className={styles.input} {...rest} />
      </label>
      {hasError && errorMessage && (
        <p className={styles.error}>{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
