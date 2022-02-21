
/**
 * Sets up rewards options and eligibility outputs as string arrays to be used in other functions
 */
export let channels = ["SPORTS", "KIDS", "MUSIC", "NEWS", "MOVIES"]

export let rewards = [
    [channels[0], "CHAMPIONS_LEAGUE_FINAL_TICKET"],
    [channels[1], "N/A"],
    [channels[2], "KARAOKE_PRO_MICROPHONE"],
    [channels[3], "N/A"],
    [channels[4], "PIRATES_OF_THE_CARIBBEAN_COLLECTION"]
];

export let eligiblityOutput = [
    "CUSTOMER_ELIGIBLE",
    "CUSTOMER_INELIGIBLE",
    "Technical failure exception",
    "Invalid account number exception"
]
