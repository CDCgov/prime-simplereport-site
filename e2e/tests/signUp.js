module.exports = {
  // '@disabled': true,
  "1. Sign up": (browser) => {
    browser.page
      .signUp()
      .navigate()
      .signUp();
  },
  "2. Ordering provider conditionally required": (browser) => {
    browser.page
      .signUp()
      .navigate()
      .orderingProviderOptionalForNorthDakota();
  },
};
