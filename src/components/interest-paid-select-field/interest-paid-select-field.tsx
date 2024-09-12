import React, { useState } from "react";
import SelectField, {
  SelectFieldProps,
} from "../selectField/select-field.component";

interface InterestPaidSelectFieldProps
  extends Omit<SelectFieldProps, "onChange" | "label" | "options" | "value"> {
  setter: (value: number) => void;
}

const InterestPaidSelectField: React.FC<InterestPaidSelectFieldProps> = ({
  setter,
  ...rest
}) => {
  const [interestPaid, setInterestPaid] = useState("maturity");

  const options = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "annually", label: "Annually" },
    { value: "maturity", label: "At Maturity" },
  ];

  const getCompoundingFrequency = (frequency: string) => {
    switch (frequency) {
      case "monthly":
        return 12;
      case "quarterly":
        return 4;
      case "annually":
        return 1;
      case "maturity":
        return 1;
      default:
        return 1;
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInterestPaid(e.target.value);
    setter(getCompoundingFrequency(e.target.value));
  };

  return (
    <SelectField
      label="Interest Paid"
      options={options}
      value={interestPaid}
      onChange={changeHandler}
      {...rest}
    />
  );
};

export default InterestPaidSelectField;
