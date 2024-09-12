import { calculateFinalBalance } from "./calculate-term-deposit-balance";

describe("calculateFinalBalance", () => {
  const testCases = [
    {
      inputs: {
        depositAmount: 10000,
        interestRate: 1.1,
        investmentTerm: 3,
        interestPaidFrequency: 12,
      },
      expectedBalance: 10335,
    },
    {
      inputs: {
        depositAmount: 10000,
        interestRate: 1.1,
        investmentTerm: 3,
        interestPaidFrequency: 4,
      },
      expectedBalance: 10335,
    },
  ];
  it.each(testCases)(
    "for $inputs should return $expectedBalance",
    ({ inputs, expectedBalance }) => {
      const finalBalance = calculateFinalBalance(
        inputs.depositAmount,
        inputs.interestRate,
        inputs.investmentTerm,
        inputs.interestPaidFrequency
      );
      expect(finalBalance).toBeCloseTo(expectedBalance, 0);
    }
  );

  const testCases2 = [
    {
      inputs: {
        depositAmount: 10000,
        interestRate: 0,
        investmentTerm: 3,
        interestPaidFrequency: 1,
      },
      expectedBalance: undefined,
    },
    {
      inputs: {
        depositAmount: 10000,
        interestRate: -1,
        investmentTerm: 3,
        interestPaidFrequency: 1,
      },
      expectedBalance: undefined,
    },
  ];
  it.each(testCases2)("for $inputs should return undefined", ({ inputs }) => {
    const finalBalance = calculateFinalBalance(
      inputs.depositAmount,
      inputs.interestRate,
      inputs.investmentTerm,
      inputs.interestPaidFrequency
    );
    expect(finalBalance).toBeFalsy();
  });
});
