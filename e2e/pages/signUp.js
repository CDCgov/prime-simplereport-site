/* eslint no-unused-expressions: 0 */

const stringFields = [
  "organization-name",
  "state",
  "first-name",
  "last-name",
  "email",
  "work-phone-number",
];

const radioFields = ["organization-type"];

const allFields = [...stringFields, ...radioFields];

let formElements = {};
allFields.forEach((field) => {
  formElements[field] = `[name="${field}"]`;
});
formElements.submitButton = "#form-submit-button";

function fillAllFields() {
  this.expect.section("@app").to.be.visible;
  this.expect.section("@form").to.be.visible;
  stringFields.forEach((element) => {
    this.section.form.expect.element(`@${element}`).to.be.present;
    this.section.form.setValue(`@${element}`, "Testing");
  });
  this.section.form.setValue(`@email`, "test@test.test");
  radioFields.forEach((element) => {
    this.section.form.expect.element(`@${element}`).to.be.present;
    this.section.form.click(`[name="${element}"]+label`);
  });
  this.section.form.expect.element("@submitButton").to.be.visible;
  // check the hidden checkbox to skip backend submission
  this.api.execute(
    "document.getElementById('test-submission').checked = true;"
  );
}

function signUp() {
  fillAllFields.apply(this);
  this.section.form.click("@submitButton");
  this.expect
    .section("@app")
    .to.contain.text("You’re on your way to simpler reporting!");
}

module.exports = {
  url: function () {
    return this.api.launchUrl + "/sign-up";
  },
  commands: [
    {
      signUp,
    },
  ],
  sections: {
    app: {
      selector: "#main-content",
    },
    form: {
      selector: "#account-request-form",
      elements: formElements,
    },
  },
};
