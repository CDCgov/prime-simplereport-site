/* eslint no-unused-expressions: 0 */

const stringFields = [
  "first-name",
  "last-name",
  "work-phone-number",
  "cell-phone-number",
  "street-address1",
  "street-address2",
  "city",
  "state",
  "county",
  "facility-phone-number",
  "facility-type-other",
  "organization-name",
  "facility-name",
  "clia-number",
  "testing-device-other",
  "browsers-other",
  "workflow",
  "op-first-name",
  "op-last-name",
  "npi",
  "op-phone-number",
  "op-street-address1",
  "op-street-address2",
  "op-city",
  "op-state",
  "op-county",
];

const validatedFields = ["email", "zip", "op-zip"];

const radioFields = [
  "facility-type",
  "default-testing-device",
  "records-test-results",
  "process-time",
  "submitting-results-time",
];

const checkboxFields = ["browsers", "testing-devices", "access-devices"];

const allFields = [
  ...stringFields,
  ...validatedFields,
  ...radioFields,
  ...checkboxFields,
];

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
  this.section.form.setValue(`@zip`, "12345");
  this.section.form.setValue(`@op-zip`, "12345");
  [...checkboxFields, ...radioFields].forEach((element) => {
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

function orderingProviderOptionalForNorthDakota() {
  fillAllFields.apply(this);
  this.section.form.expect.element("@state").to.be.present;
  this.section.form.setValue("@state", "NY");
  this.section.form.expect.element("@npi").to.be.present;
  this.section.form.clearValue("@npi");
  this.section.form.click("@submitButton");
  this.expect.section("@form").to.be.visible;

  this.section.form.setValue("@state", "ND");
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
      orderingProviderOptionalForNorthDakota,
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
