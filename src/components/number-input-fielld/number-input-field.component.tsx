import React, { useState } from "react";
import InputField, {
  InputFieldProps,
} from "../input-field/input-field.component";
import { validateNumber } from "./number-input-field.util";

interface NumberInputFieldProps
  extends Omit<InputFieldProps, "onChange" | "type" | "value"> {
  min?: number;
  max?: number;
  setter: (value?: number) => void;
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({
  label,
  placeholder,
  min,
  max,
  setter,
  ...rest
}) => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const errorMessage = `Please enter a valid number between  ${min}-${max} with up to 2 decimal places.`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const isValidNumber = validateNumber(e.target.value, min, max);
    if (isValidNumber) {
      setHasError(false);
      setter(parseFloat(e.target.value));
    } else {
      setHasError(true);
      setter();
    }
  };

  return (
    <InputField
      label={label}
      placeholder={placeholder}
      value={value}
      hasError={hasError}
      errorMessage={errorMessage}
      onChange={handleChange}
      type="text"
      {...rest}
    />
  );
};

export default NumberInputField;
