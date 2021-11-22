---
title: Activate your organization or user account
description: Activate your SimpleReport account and set up multi-factor authentication to begin COVID-19 testing and reporting.
layout: page
class: page-docs page-docs-img-sm
sidenav: resources
home_link: true
return_top: 'true'
---

You’ll receive an email from SimpleReport asking you to activate your account. If you’re an administrator, once you’ve set up your account, you can [invite members of your team to SimpleReport]({% link _pages/using-simplereport/manage-users/invite-new-users.md %}).

Once you receive your account activation email, follow these steps:
1. Click the green **Activate your SimpleReport Account** button. You’ll need to click the button within seven days of receiving the invitation, or else it will expire.
![Email from Okta with green "Activate your SimpleReport Account" button]({% link assets/img/resources/activate-your-user-account/step-1.png %}){: .maxw-mobile }
2. On the page that appears, you’ll need to pick:
  - A secure password
  - A forgot password question
  - A security image
<br>
These all help to keep your account secure.
![An Okta page requesting a password, password question, and security image]({% link assets/img/resources/activate-your-user-account/step-2.png %}){: {: .maxw-mobile .margin-left-neg-5 }
3. Click **Create My Account** at the bottom right of the page.
![The "Create My Account" button]({% link assets/img/resources/activate-your-user-account/step-3.png %})
4. [Pick a multi-factor authentication option](#multi-factor-authentication-options), and click **Setup** below it. These authentication options, too, are meant to secure your account. For most users, SMS authentication is the easiest option, because it sends a text message to your phone. (If you choose biometric authentication, make sure that you’ll only log in to SimpleReport from the device you’re currently using. Biometric authentication may be difficult to use across multiple devices.) Below, you can review instructions for setting up [SMS authentication and Google Authenticator/Okta Verify](#multi-factor-authentication-options).
![An Okta page showing the four different multifactor authentication options: Okta Verify, Security Key or Biometric Authenticator, Google Authenticator, and SMS Authentication]({% link assets/img/resources/activate-your-user-account/step-4.png %})
5. Click the **Finish** button at the bottom of the registration page. The page will confirm that you’ve successfully set up your multi-factor authentication, and you’ll get a confirmation email, too.

You can now [log in to SimpleReport]({% link _pages/getting-started/organizations-and-testing-facilities/log-in-to-simplereport.md %}).

## Multi-factor authentication options
If you choose SMS or Google Authenticator/Okta Verify as your multi-factor authentication, follow the instructions below to get set up.

### SMS authentication
1. Enter your phone number, then click **Send code**. (Make sure to click **Send code**, or you won’t be able to continue.)
![Okta page asking for your phone number and the blue "Send code" button]({% link assets/img/resources/activate-your-user-account/sms-step-1.png %})
2. Check your text messages for a 6-digit authentication code.
3. Enter the code in the “Enter Code” field, then click **Verify**.
![Okta page with the "Enter Code" field and blue "Verify" button]({% link assets/img/resources/activate-your-user-account/sms-step-3.png %})

### Google Authenticator or Okta Verify
1. Select the kind of phone that you use (either iPhone or Android). You’ll be asked to download an app. Download it on your phone and wait for it to install. (The page on your device might vary a bit from the screenshot below, based on your device type and whether you chose Google Authenticator or Okta Verify.)
![Okta page that asks you to choose iPhone or Android, with directions for downloading the app]({% link assets/img/resources/activate-your-user-account/authenticator-verify-step-1.png %})
2. Once the app is installed, click **Next**.
3. Open the app and scan the QR code that appears on your SimpleReport registration page. Once you’ve successfully scanned the QR code, click **Next**.
![Okta page with the QR code]({% link assets/img/resources/activate-your-user-account/authenticator-verify-step-3.png %})
4. Back on your phone, the app will show you a code. Enter the code on the registration page, then click **Verify**. (The code changes regularly, so you’ll need to check the app each time you log in to SimpleReport.)
![Okta page with the "Enter Code" field and blue "Verify" button]({% link assets/img/resources/activate-your-user-account/authenticator-verify-step-4.png %})
