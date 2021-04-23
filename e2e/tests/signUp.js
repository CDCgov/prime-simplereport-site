module.exports = {
  // '@disabled': true,
  "1. Sign up": (browser) => {
    browser.page
      .signUp()
      .navigate()
      .signUp();
  },
};
