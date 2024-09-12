import React, { useState } from "react";
import InterestPaidSelectField from "./components/interest-paid-select-field/interest-paid-select-field";
import Button from "./components/button/button.component";
import NumberInputField from "./components/number-input-fielld/number-input-field.component";
import { calculateFinalBalance } from "./utils/calculate-term-deposit-balance";

const App: React.FC = () => {
  const [depositAmount, setDepositAmount] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [investmentTerm, setInvestmentTerm] = useState<number>();
  const [interestPaid, setInterestPaid] = useState<number>(1);
  const [finalBalance, setFinalBalance] = useState<string>();
  const isCalculateButtonDisabled = !(
    depositAmount &&
    interestRate &&
    investmentTerm &&
    interestPaid
  );

  const calculateHandler = () => {
    if (depositAmount && interestRate && investmentTerm) {
      const amount = calculateFinalBalance(
        depositAmount,
        interestRate,
        investmentTerm,
        interestPaid
      );
      setFinalBalance(amount?.toFixed(2));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Term Deposit Calculator</h1>
      <NumberInputField
        label="Start Deposit Amount"
        setter={setDepositAmount}
        min={1000}
        max={1500000}
      />
      <NumberInputField
        label="Interest Rate (%)"
        setter={setInterestRate}
        min={0.1}
        max={15}
      />
      <NumberInputField
        label="Investment Term (years)"
        setter={setInvestmentTerm}
        min={1}
        max={15}
      />

      <InterestPaidSelectField setter={setInterestPaid} />

      <Button
        label="Calculate"
        onClick={calculateHandler}
        disabled={isCalculateButtonDisabled}
      />

      {finalBalance !== null && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            Final Balance: ${finalBalance}
          </h2>
        </div>
      )}
    </div>
  );
};

export default App;
