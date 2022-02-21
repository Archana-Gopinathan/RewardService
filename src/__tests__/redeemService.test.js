/**
 * Tests file with 4 test cases one each for a specific condition as described in the test detail
 * Update on running tests - these tests seem to have an issue with dependencies
 */
const rewardsService = require('../redeemService');
test("Valid account number & eligible returns rewards", () => {
    expect(rewardsService(1111, ["SPORTS", "KIDS"], eligibilityService).toBe("CHAMPIONS_LEAGUE_FINAL_TICKET"));
});

test("Valid account number & no eligible rewards", () => {
    expect(rewardsService(1111, ["KIDS", "NEWS"], eligibilityService).toBe([]));
});

test("Invalid account number", () => {
    expect(rewardsService(100, ["SPORTS", "KIDS"], eligibilityService).toBe(-1));
});

test("Valid account number, No rewards as account number ineligible", () => {
    expect(rewardsService(3001, ["SPORTS", "KIDS"], eligibilityService).toBe([]));
});

test("Valid account number, No rewards due to technical error", () => {
    expect(rewardsService(4001, ["SPORTS", "KIDS"], eligibilityService).toBe([]));
});