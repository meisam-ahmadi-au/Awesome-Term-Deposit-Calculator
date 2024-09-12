export const calculateFinalBalance = (
  depositAmount: number,
  interestRate: number,
  investmentTerm: number,
  interestPaidFrequency: number
) => {
  if (
    [depositAmount, interestRate, investmentTerm, interestPaidFrequency].every(
      (num) => num > 0
    )
  )
    return (
      depositAmount *
      Math.pow(
        1 + interestRate / 100 / interestPaidFrequency,
        interestPaidFrequency * investmentTerm
      )
    );
};
