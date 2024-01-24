// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let investmentCapital = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = Math.round(investmentValue * (expectedReturn / 100));
    totalInterest +=interestEarnedInYear;
    investmentCapital += annualInvestment;
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      valueEndOfYear: formatter.format(investmentValue),
      interest: formatter.format(interestEarnedInYear), // the amount of interest earned in this year
      totalInterest: formatter.format(totalInterest),
      investmentCapital:formatter.format(investmentCapital),
       // investment value at end of year
      // investment added in this year
    });
  }

  return annualData;
}


