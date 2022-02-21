
import { rewards } from './constants.js';
import { eligiblityOutput } from './constants.js';

/**
 * Function for getting rewards
 * @param {*} customerAccountNumber 
 * @param {*} portfolio 
 * @param {*} eligibilityService 
 * @returns Customer Rewards as array
 */
export function rewardsService(customerAccountNumber, portfolio, eligibilityService) {
    //check customer's eligibility for rewards - mocked up service
    let custEligibility = eligibilityService(customerAccountNumber); 
    //handles eligibility outputs
    if (custEligibility == eligiblityOutput[0]) {
        return customerRewards(portfolio)
    } else if (custEligibility == eligiblityOutput[1] || custEligibility == eligiblityOutput[2]) {
        return [];
    } else {
        return -1;
    }
}

/**
 * Function to pick eligible rewards against a customer portfolio
 * @param {*} custPortfolio 
 * @returns Customer Rewards as an array to the calling function within this script
 * Console logs for debugging have been retained
 */
function customerRewards(custPortfolio) {
  
    let custRewardsArray = [];
    
    //builds customerRewards array
    for (let i = 0; i < custPortfolio.length; i++) {
        //console.log("custPortfolio" + custPortfolio[i]);

        for (let j = 0; j < rewards.length; j++) {
            // console.log("customer rewards options length " + custRewardsOptions.length);
            //console.log("reward " + j + rewards[j][1]);

           // let custRewardOptionName = channels[j][0];
            if (custPortfolio[i] ===  rewards[j][0] &&  rewards[j][1] != "N/A") {
                //console.log("test" + rewards[j][1]);
                custRewardsArray.push(rewards[j][1]);
            }
        }
    }
   // console.log("result" + custRewardsArray);
    return custRewardsArray;
}
