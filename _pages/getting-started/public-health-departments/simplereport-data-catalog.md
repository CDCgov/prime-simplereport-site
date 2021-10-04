---
title: SimpleReport data catalog
description:
layout: page
class: page-docs
sidenav: resources
home_link: true
return_top: 'true'
---

If you use SimpleReport, or you're a public health department receiving data from SimpleReport, here’s what you can expect. SimpleReport captures all of the data needed to meet the requirements descdribed in the U.S. government's [COVID-19 Lab Data Reporting guidance](https://www.hhs.gov/sites/default/files/hhs-guidance-implementation.pdf), including ask on order entry questions and a unique specimen ID.

SimpleReport sends test results to public health departments as HL7 2.5.1 ELR (electronic lab results) through ReportStream. View the full [ReportStream documentation [GitHub]](https://github.com/CDCgov/prime-data-hub/blob/production/prime-router/docs/schema_documentation/primedatainput-pdi-covid-19.md). You can also learn more on the [ReportStream website](https://reportstream.cdc.gov/).

## Types of data fields
Data created in SimpleReport falls into three categories:
- **Required**: user must enter this data
- **Optional**: users may enter this data, but are able to submit test results without completing it
- **System-generated**: the SimpleReport system automatically creates this data

{% capture patient-information %}
### Patient information
- Patient’s last name (required)
- Patient’s first name (required)
- Patient’s middle name (optional)
- Patient’s date of birth (required)
- Patient address (required)
  - SimpleReport standardizes addresses:
    - Patient’s street address (required)
    - Patient’s city (required)
    - Patient’s county (system-generated)
    - Patient’s state (required)
    - Patient’s zip code (required)
- Patient’s phone number (required)
- Patient’s sex (optional)
- Patient’s ethnicity (optional)
- Patient’s race (optional)
- Patient’s email (optional)
- Patient’s role (optional)
  - Example: student, staff, resident, visitor

### Ask on order entry
- Is the patient employed in healthcare? (required)
- Is the patient a resident of a congregate setting? (required)
- Is this the patient’s first test for COVID-19? (optional)
  - If not, when was the last test, what was the test type, and - what was the result?
- Is the patient symptomatic for this disease? (optional)
    - If yes, list symptoms
    - Illness onset date
- Is the patient pregnant? (optional)
{% endcapture %}

{% capture test-information %}
### Test information
- Device Name (system-generated)
  - The SimpleReport user selects from a dropdown menu
- Ordered test code (system-generated)
  - LOINC code of the test performed. This is a standardized coded value describing the test.
- Swab Type (system-generated based on device)
- Test date (required)
  - The default test date is today

### Results
- Specimen ID (system-generated and unique for every test result)
- Corrected result ID (optional)
  - This field is usually blank, and is used to correct or modify a past test result
- Test result code (required and system-generated SNOMED code)
{% endcapture %}

{% capture testing-lab-info %}
SimpleReport collects testing facility information and organization information. A testing facility can be part of a larger parent organization or company, like a school district, chain of nursing homes, health system, or university.

The testing lab and ordering facility are the same thing in SimpleReport, so you’ll receive information about the same entity.

- Testing lab's name (required)
- Testing lab's CLIA (required)
  - SimpleReport doesn’t enforce unique CLIAs
- Testing lab's street address (required)
- Testing lab's city (required)
- Testing lab's state (required)
- Testing lab's zip code (required)
- Testing lab's phone number (required)
- Testing lab's county (system generated)<br>
- Organization name (required)
  - Use when an organization (like a large hospital system) owns many facilities
- Ordering facility's name (required)
- Ordering facility's street address (required)
- Ordering facility's city (required)
- Ordering facility's state (required)
- Ordering facility's zip code (required)
- Ordering facility's phone number (required)
- Ordering facility's county (system-generated)
- Ordering facility's email (optional)<br>
- Reporting facility’s name (required)
- Reporting facility’s CLIA (required)
  - SimpleReport doesn’t enforce unique CLIAs
{% endcapture %}

{% capture ordering-provider %}
- Ordering provider's ID (optional)
  - The ordering provider's National Provider Identifier
- Ordering provider's last name (optional)
- Ordering provider's first name (optional)
- Ordering provider's street address (optional)
- Ordering provider's city (optional)
- Ordering provider's state (optional)
- Ordering provider's zip code (optional)
- Ordering provider's phone number (optional)
- Ordering provider's county (optional)
{% endcapture %}

{% capture example-data %}
The sample data below is not real. It’s here to give you a sense of the information you’ll receive from SimpleReport. All required and system-generated fields appear in the example data below, but only some optional fields appear.

### Patient information
#### Patient information
- Patient’s last name: Doe
- Patient’s first name: Jane
- Patient’s middle name: A
- Patient’s date of birth: 1/1/1970
- Patient address
  - Patient’s street address: 1234 Maple Street
  - Patient’s city: Springfield
  - Patient’s county: Pleasantview
  - Patient’s state: IA
  - Patient’s zip code: 12345
- Patient’s phone number: (123) 456-7890
- Patient’s sex: Female
- Patient’s race: Black or African American
- Patient’s role: Visitor

#### Ask on order entry
- Is the patient employed in healthcare? No
- Is the patient a resident of a congregate setting? No
- Is this the patient’s first test for COVID-19?: Yes
- Is the patient symptomatic for this disease?: Yes
  - Symptoms: Chills, Fever, Cough
  - Symptom Onset Date: 1/30/2021

### Test information
#### Test information
- Device Name: Abbott BinaxNow
- Ordered test code: 94558-4
- Swab Type: Nasal swabs
- Test date: 2/1/2021

#### Results
- Specimen ID: 30aea118-1eae-41db-8aea-0652358fc37b
- Test result code: Negative

### Testing lab/facility/organization information
- Testing lab's name: Your Local Facility
- Testing lab's CLIA: 12D3456789
- Testing lab's street address: 987 Main Street
- Testing lab's city: Springfield
- Testing lab's state: IA
- Testing lab's zip code: 12345
- Testing lab's phone number: (987) 654-3210
- Testing lab's county: Pleasantview<br>
- Organization name: Iowa Communities Testing
- Ordering facility's name: Your Local Facility
- Ordering facility's street address: 987 Main Street
- Ordering facility's city: Springfield
- Ordering facility's state: IA
- Ordering facility's zip code: 12345
- Ordering facility’s phone number: (987) 654-3210
- Ordering facility's county: Pleasantview<br>
- Reporting facility’s name: Your Local Facility
- Reporting facility’s CLIA: 12D3456789

### Ordering provider information
- Ordering provider's ID: 1538234679
- Ordering provider's last name: Smith
- Ordering provider's first name: Barbara
- Ordering provider's city: Northville
- Ordering provider's state: IA
- Ordering provider's zip code: 23456
{% endcapture %}

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a1">
      Patient information
    </button>
  </h2>
  <div id="m-a1" class="usa-accordion__content usa-prose">
    {{ patient-information | markdownify }}
  </div>
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a2">
      Test information
    </button>
  </h2>
  <div id="m-a2" class="usa-accordion__content usa-prose">
    {{ test-information | markdownify }}
  </div>
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a3">
      Testing lab/facility/organization information
    </button>
  </h2>
  <div id="m-a3" class="usa-accordion__content usa-prose">
    {{ testing-lab-info | markdownify }}
  </div>
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a4">
      Ordering provider information
    </button>
  </h2>
  <div id="m-a4" class="usa-accordion__content usa-prose">
    {{ ordering-provider | markdownify }}
  </div>
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a5">
      Example data
    </button>
  </h2>
  <div id="m-a5" class="usa-accordion__content usa-prose">
    {{ example-data | markdownify }}
  </div>
</div>
