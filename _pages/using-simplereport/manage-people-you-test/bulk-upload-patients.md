---
title: Bulk upload patients
meta: Adding patients to SimpleReport in bulk using a CSV file 
layout: page
class: page-docs
sidenav: resources
home_link: true
return_top: 'true'
---

To report results for patients in SimpleReport, you first need to add their information to the system. You can [add people individually]({% link _pages/using-simplereport/manage-people-you-test/add-a-new-person.md %}), ask them to [register themselves]({% link _pages/using-simplereport/manage-people-you-test/self-registration.md %}), or upload multiple people at once using a spreadsheet.

This page guides you through the bulk upload process, including how to format your spreadsheet and how to upload it.

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
    <td>Select from these values:<br><ul><li><code>American Indian or Alaska Native</code></li><li><code>Asian</code></li><li><code>Black or African American</code></li><li><code>Native Hawaiian or other Pacific Islander</code></li><li><code>White</code></li><li><code>Other</code></li><li><code>Unknown</code></li><li><code>Ask but unknown</code></li></ul></td>
    <td></td>
  </tr>
   <tr>
    <td style="font-weight: 600;">date_of_birth</td>
    <td style="font-weight: 600;">Yes</td>
    <td>MM/DD/YYYY or M/D/YYYY</td>
        <td><strong>✓ Yes: </strong><i>07/01/1993</i><br><strong>✓ Yes: </strong><i>7/1/1993</i><br><strong>✕ No:</strong> <i>7/1/93</i></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">biological_sex</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from these values:<br><ul><li><code>Male</code></li><li><code>Female</code></li><li><code>Other</code></li><li><code>Ambiguous</code></li><li><code>Unknown</code></li><li><code>Not applicable</code></li></ul></td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">ethnicity</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from these values:<br><ul><li><code>Hispanic or Latino</code></li><li><code>Not Hispanic or Latino</code></li><li><code>Unknown</code></li></ul></td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">street</td>
    <td style="font-weight: 600;">Yes</td>
    <td>500 characters or fewer</td>
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
    <td>Any 2-character state or US/Canada territory code</td>
    <td><strong>✓ Yes: </strong><i>CA</i><br><strong>✕ No:</strong> <i>Arkansas</i></td>
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
    <td>00000 or 00000-0000</td>
    <td><strong>✓ Yes: </strong><i>53421</i><br><strong>✓ Yes: </strong><i>53421-7890</i></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">phone_number</td>
    <td style="font-weight: 600;">Yes</td>
    <td>000-000-0000</td>
    <td><strong>✓ Yes: </strong><i>123-456-7890</i><br><strong>✕ No:</strong> <i>(123) 456-7890</i></td>
  </tr>
  <tr>
    <td>phone_number_<br>type</td>
    <td></td>
    <td>If including, select from one of these values:<br><ul><li><code>Mobile</code></li><li><code>Landline</code></li></ul></td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">employed_in_<br>healthcare</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from one of these values:<br><ul><li><code>Y</code> or <code>Yes</code></li><li><code>N</code> or <code>No</code></li><li><code>Unk</code> or <code>Unknown</code></li></ul></td>
    <td></td>
  </tr>
  <tr>
    <td style="font-weight: 600;">resident_<br>congregate_<br>setting</td>
    <td style="font-weight: 600;">Yes</td>
    <td>Select from one of these values:<br><ul><li><code>Y</code> or <code>Yes</code></li><li><code>N</code> or <code>No</code></li><li><code>Unk</code> or <code>Unknown</code></li></ul></td>
    <td></td>
  </tr>
   <tr>
    <td>role</td>
    <td></td>
    <td>If including, select from one of these values:<br><ul><li><code>Staff</code></li><li><code>Resident</code></li><li><code>Student</code></li><li><code>Visitor</code></li><li><code>Unknown</code></li></ul></td>
  <td>If you leave this blank, it will default to <code>Unknown</code>.</td>
  </tr>
</tbody></table>

## Uploading your patient CSV

Note: If you want to add certain patients to specific facilities in your organization, create a separate spreadsheet for each facility (for example, if you work for a school district, you can create a file for each school that includes the relevant students and staff). If you want to add the same patients across facilities, you can create one spreadsheet and upload patients to all facilities in your organization.  
