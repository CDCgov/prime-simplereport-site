// custom touchpoints modifications for improved accessibility
'use strict';

function initCustomTouchpointsJS() {
  const TOUCHPOINTS_MODAL_CLASS = ".fba-modal";
  const TOUCHPOINTS_BUTTON_ID = "#fba-button";
  // NOTE: Will need to update this if there are multiple "Other" options + "Other" text inputs; currently this supports only one
  const TOUCHPOINTS_OTHER_INPUT_ID = "#answer_01_other";
  const TOUCHPOINTS_OTHER_RADIO_ID = "#answer_01_3";
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  // modified from https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
  // traps keyboard focus when tabbing through touchpoints modal
  function attachTabEventListener(modal) {
    // get first element to be focused inside modal
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    // get last element to be focused inside modal
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    document.addEventListener("keydown", function (e) {
      let isTabPressed = e.key === "Tab" || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      // if shift key pressed for shift + tab combination
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
        // if tab key is pressed
      } else {
        if (document.activeElement === lastFocusableElement) {
          // if focus reached last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    });
  }

  // disable "Other" text input if "Other" radio btn isn't selected otherwise on tab through it will force selection of "Other" radio btn
  function toggleInputDisabledAttr(textId) {
    let otherRadioElem = document.querySelector(TOUCHPOINTS_OTHER_RADIO_ID);
    let isOtherChecked = otherRadioElem.checked;
    document.querySelector(textId).disabled = !isOtherChecked;
  }

  function attachRadioChangeEventListener() {
    document.addEventListener("change", function () {
      toggleInputDisabledAttr(TOUCHPOINTS_OTHER_INPUT_ID);
    });
  }

  function attachModalToggleListener() {
    const touchpointsModalButton = document.querySelector(TOUCHPOINTS_BUTTON_ID);
    touchpointsModalButton.addEventListener("click", function () {
      const modal = document.querySelector(TOUCHPOINTS_MODAL_CLASS);
      if (modal !== null && window.getComputedStyle(modal).display === "block") {
        attachTabEventListener(modal);
        toggleInputDisabledAttr(TOUCHPOINTS_OTHER_INPUT_ID);
        attachRadioChangeEventListener();
      }
    });
  }

  attachModalToggleListener();
}

// need to wait for everything to load otherwise this will not work in Firefox
window.addEventListener("load", function () {
  initCustomTouchpointsJS();
});
