---
title: Activate your user account
description:
layout: page
class: page-docs page-docs-img-sm
sidenav: resources
home_link: true
return_top: 'false'
---

SimpleReport uses a service called Okta to register users and create their accounts. Look for an email invitation from Okta to activate your user account.

Once you’ve set up your account, you can [invite members of your team to SimpleReport]({% link _pages/resources/using-simplereport/manage-users/invite-new-users.md %}).

Once you receive the invitation, follow these steps:
1. Click the green **Activate your SimpleReport Account** button. You’ll need to click the button within seven days of receiving the invitation, or else it will expire.
![Email from Okta with green "Activate your SimpleReport Account" button]({% link assets/img/resources/activate-your-user-account/step-1.png %})
2. On the page that appears, you’ll need to pick:
  - A secure password
  - A forgot password question
  - A security image
<br>
These all help to keep your account secure.
![An Okta page requesting a password, password question, and security image]({% link assets/img/resources/activate-your-user-account/step-2.png %}){: .margin-left-neg-5 }
3. Click **Create My Account** at the bottom right of the page.
![The "Create My Account" button]({% link assets/img/resources/activate-your-user-account/step-3.png %})
4. [Pick a multifactor authentication option](#multifactor-authentication-options), and click **Setup** below it. These authentication options, too, are meant to secure your account. For most users, SMS authentication is the easiest option, because it sends a text message to your phone.<br>
At the bottom of this page, you can review instructions for setting up [SMS authentication and Google Authenticator/Okta Verify](#multifactor-authentication-options).
![An Okta page showing the four different multifactor authentication options: Okta Verify, Security Key or Biometric Authenticator, Google Authenticator, and SMS Authentication]({% link assets/img/resources/activate-your-user-account/step-4.png %})
5. Click the **Finish** button at the bottom of the registration page. The page will confirm that you’ve successfully set up your multifactor authentication, and you’ll get a confirmation email, too.
![The blue "Finish" button at the bottom of the Okta multifactor authentication options page]({% link assets/img/resources/activate-your-user-account/step-5.png %})

Now that you’re registered, [join the USDS-CDC Google Group]({% link _pages/resources/staying-connected/join-the-simplereport-google-group.md %}), which provides updates on SimpleReport.

You can now [log in to SimpleReport]({% link _pages/resources/getting-started/testing-facilities/log-in-to-simplereport.md %}).

## Multifactor authentication options
If you choose SMS or Google Authenticator/Okta Verify as your multifactor authentication, follow the instructions below to get set up.

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
3. Once the app is installed, open the app and scan the QR code that appears on your SimpleReport registration page. Once you’ve successfully scanned the QR code, click **Next**.
![Okta page with the QR code]({% link assets/img/resources/activate-your-user-account/authenticator-verify-step-3.png %})
4. Back on your phone, the app will show you a code. Enter the code on the registration page, then click **Verify**. (The code changes regularly, so you’ll need to check the app each time you log in to SimpleReport.)
![Okta page with the "Enter Code" field and blue "Verify" button]({% link assets/img/resources/activate-your-user-account/authenticator-verify-step-4.png %})
