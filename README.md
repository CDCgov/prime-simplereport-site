# Simple Report Public Website

The static website resources for https://www.simplereport.gov/

## Table of Contents
- [Simple Report Public Website](#simple-report-public-website)
  - [Table of Contents](#table-of-contents)
  - [Recommended Versions](#recommended-versions)
  - [Setup](#setup)
  - [Contributing](#contributing)
  - [Cloud Environments](#cloud-environments)

## Recommended Versions

| Software | Version | How to Configure |
| :- | :- | :- |
| Node | 18.x | Configure with `.nvmrc` using [asdf](https://asdf-vm.com/guide/getting-started.html#_2-download-asdf) or [nvm](https://github.com/nvm-sh/nvm) |
| Ruby | 3.1.x | Configure with `.ruby-version` using [asdf](https://asdf-vm.com/guide/getting-started.html#_2-download-asdf) or [rbenv](https://github.com/rbenv/rbenv) |

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

## Contributing
1. make changes on a branch
2. Open a PR and deploy the branch to a non prod env (staging, test, pentest or github pages). Note this environment will be overridden on merges to `main`
3. Link to deployed code in PR
4. Ensure all checks are passing, get at least one code review, and that changes work as expected in the cloud env
5. Merge PR into `main` make sure changes are deployed and working in [demo](https://demo.simplereport.gov)

## Cloud Environments
**Type**|**Static Site URL**|**Deployment**|**How to trigger**
:-----:|:-----:|:-----:|:-----:
Prod|https://www.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Staging|https://stg.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Dev|https://dev.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Demo|https://demo.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Test|https://test.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Pentest|https://pentest.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
Training|https://training.simplereport.gov|Automed on merge to `main`|[Github Actions](#manually-trigger-deploy)
github pages|https://cdcgov.github.io/prime-simplereport-site/|Automed on merge to `main` and `gh-pages`|`yarn deploy`
