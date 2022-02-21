'use strict';

import { channels } from './constants.js';
import { rewardsService} from './redeemService.js';
import { eligibilityService } from './eligibilityService';

let reward =  rewardsService(1000, [channels[0], channels[1]], eligibilityService);
if (reward == -1) {
    alert("No rewards. Invalid account number")
} else if (reward.length > 0) {
    alert("Congratulations, you are eligible for the rewards: " + reward)
} else {
    alert("No rewards")
}
