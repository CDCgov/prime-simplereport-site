---
title: What public health departments receive from the Data Hub
description:
layout: page
class: page-docs
sidenav: resources
home_link: true
return_top: 'false'
---

When a test is submitted in SimpleReport, public health departments receive the following data through the PRIME ReportStream. We’ve added additional detail for fields that might not be clear on their own, but you can also consult the [full technical specifications](https://github.com/CDCgov/prime-data-hub/blob/production/prime-router/docs/schema_documentation/primedatainput-pdi-covid-19.md) for more.

{% capture patient-information %}
### Identity
- list

### Residence and contact
- list
  - sublist
{% endcapture %}

{% capture test-information %}
### Test information
- list

### Ask on order entry
- list

### Results
- list
{% endcapture %}

{% capture testing-lab-info %}
- list
{% endcapture %}

{% capture ordering-facility %}
### Facility and organization
- list

### Provider
- list
{% endcapture %}



<div class="usa-accordion" aria-multiselectable="true">
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
      Testing lab information
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
      Ordering facility and provider information
    </button>
  </h2>
  <div id="m-a4" class="usa-accordion__content usa-prose">
    {{ ordering-facility | markdownify }}
  </div>
</div>