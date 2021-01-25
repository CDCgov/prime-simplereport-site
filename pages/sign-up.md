---
title:
description: Sign up
permalink: /sign-up/
layout: post
return_top: 'false'
home_text: Return to home
---

<section class="usa-section-list usa-section">
  <div class="grid-row section-title padding-left-0">
    <div class="section-title-line taller-section-title-line"></div>
    <div class="huge-header">Organization type</div>
    <div class="medium-header padding-top-32 padding-bottom-48">SimpleReport serves two different types of organizations.</div>
  </div>
  <div class="grid-row padding-left-0">
    <div class="grid-col-6 sign-up-box">
        <div class="small-header">Testing sites</div>
        <div class="small-prose">
            For locations providing rapid COVID-19 testing, including:
            <ul>
                <li>K-12 schools</li>
                <li>Congregate living settings (assisted living, long-term care facilities, jails, etc.)</li>
                <li>Universities</li>
                <li>Urgent care centers</li>
                <li>Airports, and more</li>
            </ul>
            <a href="https://airtable.com/shrekmUp6PNvVbHAJ" class='usa-button usa-button--primary text-no-underline text-ink large-button width-100'>I'm a testing site</a>
        </div>
    </div>
    <div class="grid-col-6 sign-up-box">
        <div class="small-header">Public health departments</div>
        <div class="small-prose">
            For United States public health agencies at various levels, including:
            <ul>
                <li>State</li>
                <li>Local</li>
                <li>Territorial</li>
                <li>Tribal</li>
            </ul>
            <a href="https://docs.google.com/forms/d/18VoUG_kpogHqJrrM5J2pp1EeMklAydPwPJzYZyieN2Y/edit" class='usa-button usa-button--primary text-no-underline text-ink large-button width-100'>I'm a public health department</a>
        </div>
    </div>
    <a class='grid-col-6 home-link margin-top-40' href="{% link pages/home.md %}">
      {% include arrow-left.html %}
      {{ page.home_text }}
    </a>
  </div>
</section>
