---
title: Home
permalink: /
layout: home
class: page-home
hero:
  image: ''
  # callout:
  #   alt: "Hero callout:"
  #   text: Bring attention to a current priority
  button:
    href: pages/forms/account-request-form.html
    text: Sign up for free
  # link:
  #   text: Link to more about that priority
  #   href: /link/
  content: A better way to report COVID-19 rapid tests
  placeholder:
    src: /assets/img/project-images/test-queue-horiz.png
    alt: simplereport displayed on a tablet
  vector: false
# tagline: A tagline highlights your approach.
# intro: |
#   The tagline should inspire confidence and interest, [focusing on the value](javascript:void(0);) that your overall approach offers to your audience. Use a heading typeface and keep your tagline to just a few words, and don’t confuse or mystify.

#   Use the right side of the grid to explain the tagline a bit more. What are your goals? How do you do your work? Write in the present tense, and stay brief here. People who are interested can find details on internal pages.

# graphics:
#   - image:
#       src: /assets/uswds/img/circle-124.png
#       alt: ''
#     title: Graphic headings can vary.
#     description: Graphic headings can be used a few [different ways](javascript:void(0);), depending on what your landing page is for. Highlight your values, specific program areas, or results.
#   - image:
#       src: /assets/uswds/img/circle-124.png
#       alt: ''
#     title: Stick to 6 or fewer words.
#     description: Keep body text to about 30. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.
#   - image:
#       src: /assets/uswds/img/circle-124.png
#       alt: ''
#     title: Never highlight anything without a goal.
#     description: For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it.
#   - image:
#       src: /assets/uswds/img/circle-124.png
#       alt: ''
#     title: Could also have 2 or 6.
#     description: In addition to your goal, find out your users’ goals. [What do they want to know](https://18f.gsa.gov/) or do that supports your mission? Use these headings to show those.

sections:
  - title:
    columns:
      - heading:
        intro_p:
        sub_heading: ''
        bullets:
          -
          -
          -
        intro_p: |

  - title:
    columns:
      - heading: COVID-19 testing sites
        intro_p: ''
        bullets:
          -
      - heading: Public health departments
        intro_p: Any public health department in the United States can use SimpleReport. SimpleReport is built to scale up and can connect you to thousands of testing sites, ensuring you get results through one tool, in the format that’s easiest for you.
return_top: 'false'
---

<section class="margin-y-4 tablet:margin-y-8">
  <div class="grid-container">
    <div class="section__title-line"></div>
    <h2 class="section__heading">How it works</h2>
    <div class="section__title-line"></div>
    <!-- <div class="display-flex flex-justify-center margin-top-2">
      <img class="illustration-image" src="{{ '/assets/img/how-it-works.svg' | relative_url }}" alt="how it works">
    </div> -->
    <h2 class="font-heading-xl text-medium text-primary-darker margin-top-3 tablet:margin-top-5">
      SimpleReport fits into your existing workflow.
    </h2>
    <div class="grid-row margin-top-5">
      <div class="display-flex flex-justify-end tablet:display-none">
        <img class="brown-bubble flex-align-self-start" src="{{ '/assets/img/brown-bubble.svg' | relative_url }}" alt="brown bubble">
        <img class="animation-1 flex-align-self-end" src="{{ '/assets/img/animation1.gif' | relative_url }}" alt="animation 1">
      </div>
      <div class="grid-row grid-gap-6 display-flex">
        <div class="tablet:grid-col-5 grid-col-12 flex-align-self-end">
          <h3 class="font-heading-3 text-primary-darker text-medium margin-top-4 desktop:margin-top-0">
            No more repeat data entry
          </h3>
          <p class="usa-intro line-height-sans-4">
            Skip re-entering the same data every time you report. Just pull up a name, enter the test result, and submit. It’s that easy.
          </p>
        </div>
        <div class="display-none tablet:display-block grid-col-7">
          <div class="display-flex flex-justify-end">
            <img class="brown-bubble" src="{{ '/assets/img/brown-bubble.svg' | relative_url }}" alt="brown bubble">
            <img class="animation-1 flex-align-self-end" src="{{ '/assets/img/animation1.gif' | relative_url }}" alt="animation 1">
          </div>
        </div>
      </div>
      <div class="grid-row grid-gap-6 margin-top-6 tablet:margin-top-card">
        <div class="tablet-lg:grid-col-7 grid-col-12">
          <div class="display-flex">
          <img class="blue-bubble flex-align-self-start" src="{{ '/assets/img/blue-bubble.svg' | relative_url }}" alt="blue bubble">
          <img class="animation-2" src="{{ '/assets/img/animation2.gif' | relative_url }}" alt="animation 2">
          </div>
        </div>
        <div class="tablet-lg:grid-col-5 grid-col-12">
          <h3 class="font-heading-3 text-primary-darker text-medium margin-top-4 desktop:margin-top-0">
            Reporting done for you
          </h3>
          <p class="usa-intro line-height-sans-4">
            SimpleReport automatically converts your data into the format required by your public health department. Real-time reporting submits test results for you the moment you record them — saving you time.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="margin-y-4 tablet:margin-y-8">
  <div class="grid-container">
    <div class="section__title-line"></div>
    <h2 class="section__heading">What you need to know</h2>
    <div class="section__title-line"></div>
    <div class="usa-accordion margin-top-4">
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button 
          class="usa-accordion__button font-ui-md text-medium text-primary-darker"
          aria-expanded="false"
          aria-controls="a1">
          It’s simple to get started
        </button>
      </h3>
      <div id="a1" class="usa-accordion__content usa-prose text-primary-darker">
        <p>Onboarding to SimpleReport is easy. All you need to do is request access, sign a few forms online, and verify your identity. Then you’re ready to test.</p>
        <p>If you’re in a <a href="{% link _pages/resources/using-simplereport/manage-facility-info/find-supported-jurisdictions.md %}">supported jurisdiction</a>, you can sign up now and expect to be up and running in about a week. Otherwise, you can <a href="{% link pages/forms/waitlist-form.html %}">join the waitlist</a>, and we’ll let you know when SimpleReport comes to your area.</p>
      </div>
      <h3 class="usa-accordion__heading">
        <button 
          class="usa-accordion__button font-ui-md text-medium text-primary-darker"
          aria-expanded="false"
          aria-controls="a2">
          All you need is a laptop or tablet with an internet connection
        </button>
      </h3>
      <div id="a2" class="usa-accordion__content usa-prose">
        <p>You won’t need to install an app or buy any fancy equipment. As long as you have a computer or tablet with an internet connection, you can use SimpleReport.</p>
      </div>
      <h3 class="usa-accordion__heading">
        <button 
          class="usa-accordion__button font-ui-md text-medium text-primary-darker"
          aria-expanded="false"
          aria-controls="a3">
          SimpleReport satisfies state and local reporting requirements
        </button>
      </h3>
      <div id="a3" class="usa-accordion__content usa-prose">
        <p>SimpleReport automatically sends data to your state public health department. If your local public health departments don’t receive this data directly from the state or have additional requirements outside of state reporting, SimpleReport can send the data directly to local public health departments. If you're curious about particular reporting requirements, refer to the <a href="#">SimpleReport data catalog</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="margin-y-4 tablet:margin-y-8">
  <div class="grid-container usa-prose">
    <p class="usa-intro">Eager to try SimpleReport for yourself? Check out the SimpleReport demo. It’s a safe space where you can experiment and get comfortable with SimpleReport using fake data.</p>
    <a class="usa-button usa-button--accent-cool text-no-underline text-ink" href="https://training.simplereport.gov/app/queue?facility=adddb27d-3be3-48b7-b959-ea506fd92ce6">Go to the demo</a>
  </div>
</section>

<section>
  <img class="mid-wave-top" src="{{ '/assets/img/mid-wave-top.svg' | relative_url }}" alt="mid wave top">
  <div class="bg-accent-cool-lighter padding-top-4 tablet:padding-top-0">
    <div class="grid-container">
      <div class="grid-row grid-gap grid-gap-small-btm section-columns">
        <div class="tablet:grid-col usa-prose">
          <img class="height-9" src="{{ '/assets/img/cdc-logo-large.png' | relative_url }}" alt="cdc logo">
          <h3 class="font-heading-lg text-primary-darker margin-top-2">
            Free and created by the CDC
          </h3>
          <div class="font-body-sm">
            Developed for testing sites and public health departments, SimpleReport is 100% free.
          </div>
        </div>
        <div class="tablet:grid-col usa-prose">
          <img class="height-9" src="{{ '/assets/img/shield.svg' | relative_url }}" alt="shield">
          <h3 class="font-heading-lg text-primary-darker margin-top-2">
            Safe and secure
          </h3>
          <div class="font-body-sm">
            Test results and patient information are securely stored and protected by two-factor authentication, database encryption, and HTTPS.
          </div>
        </div>
      </div>
    </div>
  </div>
  <img class="mid-wave-bottom" src="{{ '/assets/img/mid-wave-bottom.svg' | relative_url }}" alt="mid wave bottom">
</section>

<section class="margin-y-4 tablet:margin-top-2 tablet:margin-bottom-8">
  <div class="grid-container">
    <div class="section__title-line"></div>
    <h2 class="section__heading">Where you can use SimpleReport</h2>
    <div class="section__title-line"></div>
    <div class="usa-prose margin-top-4">
      <p class="usa-intro">SimpleReport is available in many parts of the country now, and is expanding to new jurisdictions quickly.</p>
      <img class="padding-x-10" src="{{ '/assets/img/home-map.jpg' | relative_url }}" alt="Map of supported jurisdictions">
      <p><a href="{% link _pages/resources/using-simplereport/manage-facility-info/find-supported-jurisdictions.md %}">Review the full list of supported jurisdictions</a></p>
    </div>
  </div>
</section>

<section class="usa-section bg-primary usa-dark-background">
  <div class="grid-container">
    <div class="usa-prose">
      <h2 class="font-heading-lg text-white">
        Ready to simplify your COVID-19 reporting?
      </h2>
      <p class="usa-intro">If you’re in a supported jurisdiction, you can sign up now. If you’re not, join the waitlist and we’ll let you know when SimpleReport comes to your area.</p>
      <a class="usa-button usa-button--big usa-button--accent-cool margin-top-5 text-no-underline text-ink font-body-sm" href="{% link pages/forms/account-request-form.html %}">Request a SimpleReport account</a>
      <a class="usa-button usa-button--big usa-button--outline usa-button--inverse margin-top-5 text-no-underline font-body-sm" href="{% link pages/forms/waitlist-form.html %}">Join the waitlist</a>
    </div>
  </div>
</section>
