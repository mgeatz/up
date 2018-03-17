import { helper } from '@ember/component/helper';

export function returnDate(params/*, hash*/) {

  //console.log('return date minDate = ', params[0]);

  return new Date(params[0]);
}

export default helper(returnDate);
