import React from "react";
import { styles } from "./select-field.styles";

export interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<{ value: string; label: string }>;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  className = "",
  ...rest
}) => {
  return (
    <div className={styles.wrapper(className)}>
      <label className={styles.label}>
        {label}
        <select className={styles.input} {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectField;
