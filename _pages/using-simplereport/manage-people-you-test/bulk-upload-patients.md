---
title: Bulk upload patients
meta: Adding patients to SimpleReport in bulk using a CSV file
layout: page
class: page-docs
sidenav: resources
home_link: true
return_top: "true"
---

To report results for patients in SimpleReport, you first need to add their information to the system. You can [add patients individually]({% link _pages/using-simplereport/manage-people-you-test/add-a-new-person.md %}), ask them to [register themselves]({% link _pages/using-simplereport/manage-people-you-test/self-registration.md %}), or upload multiple patients at once using a spreadsheet.

This page guides you through the bulk upload process, including how to format your spreadsheet and how to upload it.

## Uploading your patient CSV

To upload your patient spreadsheet to SimpleReport, follow these steps:

1. Make sure the patient data in your spreadsheet matches the [formatting requirements below](#preparing-your-spreadsheet-data). SimpleReport will validate your data when you upload the CSV, and any errors will prevent you from successfully submitting results (you’ll have the chance to fix errors and resubmit).
2. When you’re ready to upload your spreadsheet, click **Patients** at the top of the page.
   ![SimpleReport's top navigation, with the "People" tab selected]({% link assets/img/resources/bulk-upload-patients/patient-navigation.png %})
3. Click the **Add patients** button at the top right of the screen. From the dropdown menu that appears, select **Import from spreadsheet**.
   ![The user's mouse hovering over the "Add patients" button toward the top right of the page]({% link assets/img/resources/bulk-upload-patients/import-from-spreadsheet.png %})
4. If you’ve already formatted your data, skip to the second step on this page. To add the patients in your spreadsheet to a single facility, select **One facility**. To add the patients to all facilities in your organization, select **All facilities**. You can’t select a subset of facilities in your organization. <br/><br/>If you want to add certain patients to specific facilities in your organization, create a spreadsheet for each facility to upload separately (for example, if you work for a school district, you can create a file for each school that includes the relevant students and staff).
   ![SimpleReport's patient bulk upload page radio button options to choose one facility or all facilities]({% link assets/img/resources/bulk-upload-patients/facility-selector.png %})
5. Drag your CSV file into the upload box, or choose it from your computer browser. Once the right file is selected, click **Upload CSV file**.
   ![A file selected in the patient uploader box with an upload button below]({% link assets/img/resources/bulk-upload-patients/upload-spreadsheet.png %})
6. SimpleReport will check to make sure your data is in the correct format. If the data is incorrect, SimpleReport will show an error message with guidance about what you need to fix below it.
7. (If you get errors) Following the error message guidance, edit your spreadsheet and save it. Try uploading it again (step 5).
8. Once SimpleReport confirms that your data is properly formatted, it will add the patients. This can take up to 10 minutes or more. The process will continue even if you leave SimpleReport, and we’ll send an email to alert you when it’s done.

Once you get an email confirming the upload is complete, you can view and report test results for the new patients on SimpleReport.

## Preparing your spreadsheet data

Before you upload your spreadsheet on SimpleReport, make sure your patient data closely follows the guidance below. In general, you must:

- Match all your field headers to the column names listed below
- Include all required columns below in your CSV
- Include values in all required fields, following guidance below
- Leave out text in cells for optional fields you don’t want to include (for example, don’t write “N/A” in a field)

### Data elements

<table class="usa-table usa-table--borderless">
     <thead><tr>
    <th>Column name</th>
    <th>Required?</th>
    <th>Format</th>
     <th>Notes</th>
  </tr></thead>
  <tbody style="vertical-align: top; font-size= .9em;">
  <tr>
    <td style="font-weight: 600;">last_name</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Any</td>
    <td></td>
  </tr>
   <tr>
    <td style="font-weight: 600;">first_name</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Any</td>
    <td></td>
  </tr>
   <tr>
    <td>middle_name</td>
    <td></td>
    <td>Any</td>
    <td></td>
  </tr>
   <tr>
    <td>suffix</td>
    <td></td>
    <td>Any</td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">race</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from these values:
      <br>
      <ul>
        <li>
          <code>1002-5</code>
          or
          <code>American Indian or Alaska Native</code>
        </li>
        <li>
          <code>2028-9</code>
          or
          <code>Asian</code>
        </li>
        <li>
          <code>2054-5</code>
          or
          <code>Black or African American</code>
        </li>
        <li>
          <code>2076-8</code>
          or
          <code>Native Hawaiian or other Pacific Islander</code>
        </li>
        <li>
          <code>2106-3</code>
          or
          <code>White</code>
        </li>
        <li>
          <code>2131-1</code>
          or
          <code>Other</code>
        </li>
        <li>
          <code>ASKU</code>
          or
          <code>Ask, but unknown</code>
        </li>
        <li>
          <code>UNK</code>
          or
          <code>Unknown</code>
        </li>
      </ul>
    </td>
    <td></td>
  </tr>
   <tr>
    <td style="font-weight: 600;">date_of_birth</td>
    <td style="font-weight: 600;">Yes</td>
    <td>MM/DD/YYYY, M/D/YYYY, MM/DD/YY, or M/D/YY</td>
        <td><strong>Yes: </strong><i>07/01/1993</i><br><strong>Yes: </strong><i>7/1/1993</i><br><strong>Yes:</strong> <i>7/1/93</i></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">ethnicity</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from these values:
      <br>
      <ul>
        <li>
          <code>2135-2</code>
          or
          <code>Hispanic or Latino</code>
        </li>
        <li>
          <code>2186-5</code>
          or
          <code>Not Hispanic or Latino</code>
        </li>
        <li>
          <code>UNK</code>
          or
          <code>Unknown</code>
        </li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">street</td>
    <td style="font-weight: 600;">Yes</td>
    <td>
      <span class="display-block">500 characters or fewer.</span>
      <span class="display-block margin-top-105">If address is unknown or patient is unhoused, write <code>** Unknown / not given **</code> in this field.</span>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>street_2</td>
    <td></td>
    <td>500 characters or fewer</td>
    <td></td>
  </tr>
  <tr>
    <td>city</td>
    <td></td>
    <td>500 characters or fewer</td>
    <td></td>
  </tr>
  <tr>
    <td>county</td>
    <td></td>
    <td>500 characters or fewer</td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">state</td>
    <td style="font-weight: 600;">Yes</td>
    <td>
      <span class="display-block">Any 2-character state or US/Canada territory code.</span>
      <span class="display-block margin-top-105">If address is unknown or patient is unhoused, write <code>NA</code> in this field.</span>
    </td>
    <td><strong>Yes: </strong><i>CA</i><br><strong>No:</strong> <i>Arkansas</i></td>
  </tr>
  <tr>
    <td>country</td>
    <td></td>
    <td>If you leave this blank, it will default to <code>USA</code>.</td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">zip_code</td>
    <td style="font-weight: 600;">Yes</td>
    <td>
      <span class="display-block">Use format 00000 or 00000-0000.</span>
      <span class="display-block margin-top-105">If address is unknown or patient is unhoused, write <code>00000</code> in this field.</span>
    </td>
    <td><strong>Yes: </strong><i>53421</i><br><strong>Yes: </strong><i>53421-7890</i></td>
  </tr>
  <tr>
    <td>email</td>
    <td></td>
    <td>Email address</td>
    <td><strong>Yes: </strong><i>janedoe@example.com</i></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">phone_number</td>
    <td style="font-weight: 600;">Yes</td>
    <td>000-000-0000</td>
    <td><strong>Yes: </strong><i>123-456-7890</i><br><strong>No:</strong> <i>(123) 456-7890</i></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">phone_number_<br>type</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from one of these values:<br><ul><li><code>Mobile</code></li><li><code>Landline</code></li></ul></td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">employed_in_<br>healthcare</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from one of these values:
      <br>
      <ul>
        <li>
          <code>Y</code>
          or
          <code>YES</code>
        </li>
        <li>
          <code>N</code>
          or
          <code>NO</code>
        </li>
        <li>
          <code>U</code>
          or
          <code>UNK</code>
        </li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">resident_<br>congregate_<br>setting</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from one of these values:
      <br>
      <ul>
        <li>
          <code>Y</code>
          or
          <code>YES</code>
        </li>
        <li>
          <code>N</code>
          or
          <code>NO</code>
        </li>
        <li>
          <code>U</code>
          or
          <code>UNK</code>
        </li>
      </ul>
    </td>
    <td></td>
  </tr>
   <tr>
    <td>role</td>
    <td></td>
    <td>If including, select from one of these values:<br><ul><li><code>Staff</code></li><li><code>Resident</code></li><li><code>Student</code></li><li><code>Visitor</code></li><li><code>Unknown</code></li></ul></td>
  <td>If you leave this blank, it will default to <code>Unknown</code>.</td>
  </tr>
  <tr>
    <td>address_notes</td>
    <td></td>
    <td>Any</td>
    <td>Details about a patient's location or alternative contact information</td>
  </tr>
</tbody></table>
