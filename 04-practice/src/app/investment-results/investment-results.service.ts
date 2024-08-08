import { Injectable } from '@angular/core';
import { InputData } from '../user-input/input-data.model';
import { InvestmentResults } from './investment-results.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentResultsService {
  annualData: InvestmentResults[] = [];

  getAnnualData() {
    return this.annualData;
  }

  calculate(inputData: InputData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      inputData;
    const annualData: InvestmentResults[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.annualData = annualData;
  }
}
