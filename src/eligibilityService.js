
import { eligiblityOutput } from './constants.js';

/**
 * This method accepts a customer account number and returns eligibility value that matches the customer account number.
 * @param {*} customerAccountNumber Customer account number as Integer
 * @returns eligiblityOutput value
 */
 export function eligibilityService(customerAccountNumber) {
    let custEligibility;
     if(customerAccountNumber >= 1000 && customerAccountNumber < 2000) {
        custEligibility = eligiblityOutput[0];
     } else if(customerAccountNumber >= 2000 && customerAccountNumber < 3000) {
        custEligibility = eligiblityOutput[1];
    }
    else if (customerAccountNumber >= 3000 && customerAccountNumber < 4000) {
        custEligibility = eligiblityOutput[2];
    }
    else {
        custEligibility = eligiblityOutput[3];
    }
    return custEligibility; 
}
