import { round } from "lodash";

// Calculate Total Value of Entire Daily
export const calcTotalValue = daily => {
  let total = 0;
  daily.forEach(stock => {
    total += stock.total;
  });
  return round(total, 2);
};
