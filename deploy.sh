#!/bin/bash

git pull
npm install
gem install bundler
bundle install
npm run setup
npm run build:$1

case "$1" in
  demo|dev|stg|test|prod|pentest|training)
    echo "Deploying the static landing page to $1"
    az storage blob upload-batch -s _site/ -d '$web' --account-name simplereport${1}app --destination-path '/'
    ;;
  beta)
    echo "Deploying the static landing page to $1"
    az storage blob upload-batch -s _site/ -d '$web' --account-name usdssimplereportbeta --destination-path '/'
    ;;
esac