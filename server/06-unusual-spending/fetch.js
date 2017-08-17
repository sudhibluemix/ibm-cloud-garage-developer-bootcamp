import * as months from './months';
import {apiWrapper} from './apiWrapper';

const fetch = (userId) => {
  const priorMonthPayment = apiWrapper(userId, months.prior());
  const currentMonthPayment = apiWrapper(userId, months.current());
  return [
    {months: 'prior-month', payments: priorMonthPayment},
    {months: 'current-month', payments: currentMonthPayment}
  ];

};

export {fetch};
