# Simple Report Public Website

The static website resources for https://simplereport.gov/

## Table of Contents
- [Simple Report Public Website](#simple-report-public-website)
  - [Table of Contents](#table-of-contents)
  - [Recommended Versions](#recommended-versions)
  - [Setup](#setup)
  - [E2E Tests](#e2e-tests)
  - [Contributing](#contributing)
  - [Cloud Environments](#cloud-environments)
  - [Manually Trigger Deploy](#manually-trigger-deploy)

## Recommended Versions

| Software | Version | How to Configure |
| :- | :- | :- |
| Node | 14.x | Configure with `.nvmrc` using [nvm](https://github.com/nvm-sh/nvm) |
| Ruby | 2.6.x | Configure with `.ruby-version` using [rbenv](https://github.com/rbenv/rbenv) |

## Setup
Install node packages
`yarn install`

Install bundler
`gem install bundler`

Install gems
`bundle install`

Run Setup
`yarn setup`

Build/Watch sass in separate
`yarn watch`

Serve site
`yarn serve`

## E2E Tests
End to end tests are written with [Nightwatch.js](https://nightwatchjs.org/). Run the tests while the site is being served locally with:
`yarn e2e`

## Contributing
1. make changes on a branch
2. Open a PR and deploy branch to a non prod env (staging, test, pentest or github pages). Note this environment will be overridden on merges to `main`
3. Link to deployed code in PR
4. Ensure all checks are passing, get at least one code review, and that changes work as expected in the cloud env
5. Merge PR into `main` make sure changes are deployed and working in [demo](https://demo.simplereport.gov)
6. Manually trigger a deploy of `main` to `prod`. See [Manually Trigger Deploy](#manually-trigger-deploy)

## Cloud Environments
**Type**|**Static Site URL**|**Deployment**|**How to trigger**
:-----:|:-----:|:-----:|:-----:
Prod|https://simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Staging|https://stg.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Dev|https://dev.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Demo|https://demo.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Test|https://test.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Pentest|https://pentest.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Training|https://training.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
github pages|https://cdcgov.github.io/prime-simplereport-site/|Automed on merge to `main` and `gh-pages`|`yarn deploy`

## Manually Trigger Deploy

1. Navigate to the [Github Actions Tab](https://github.com/CDCgov/prime-simplereport-site/actions)
2. Select the environment you want to deploy to from the workflows list. In this case we are selecting the `dev` environment
![Select-dev](https://user-images.githubusercontent.com/53869143/108391209-78026280-71df-11eb-8cab-2d124f71627e.png)
1. Click the "Run workflow" button, select the branch you want to deploy and click the green "Run workflow" button. In this case we are deploying the latest commit on `main` to `dev`
2. ![select branch](https://user-images.githubusercontent.com/53869143/108391056-4c7f7800-71df-11eb-9d41-4c20fa5828e9.png)
3. After the workflow is completed you can verify the changes are live by Checking the deployed commit hash. This is done my going to view-source:https://dev.simplereport.gov/ (or the url for the env you deployed to). Note the deployed commit hash will appear in a comment right before the closing body tag.
```
    <!-- 56799f6 -->
  </body>
</html>
```

The Azure environments are served behind a CDN and may take some time to update. If you are not seeing an update or are fixing an urgent bug the CDN can be purged via https://docs.microsoft.com/en-us/azure/cdn/cdn-purge-endpoint
![Screen Shot 2021-03-02 at 4 35 14 PM](https://user-images.githubusercontent.com/53869143/109719316-7c7f3180-7b76-11eb-9dec-59d977850315.png)
