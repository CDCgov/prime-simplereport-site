#!/bin/bash

git pull
npm install
gem install bundler
bundle install
npm run setup
npm run build:$1

if [ "$1" == "demo" ]; then
  echo "Deploying the static landing page to $1"
  az storage blob upload-batch -s _site/ -d '$web' --account-name simplereportdemoapp --destination-path '/'
elif [ "$1" == "dev" ]; then
  echo "Deploying the static landing page to $1"
  az storage blob upload-batch -s _site/ -d '$web' --account-name simplereportdevapp --destination-path '/'
elif [ "$1" == "test" ]; then
  echo "Deploying the static landing page to $1"
  az storage blob upload-batch -s _site/ -d '$web' --account-name simplereporttestapp --destination-path '/'
elif [ "$1" == "beta" ]; then
  echo "Deploying the static landing page to $1"
  az storage blob upload-batch -s _site/ -d '$web' --account-name usdssimplereportbeta --destination-path '/'
fi
