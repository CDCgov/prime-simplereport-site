#!/bin/bash

git pull
npm install
gem install bundler
bundle install
npm run setup
npm run build

if [ "$1" == "demo" ]; then
  echo "Deploying the static landing page to $1"
  sed -i 's,https://hhs-prime.okta.com/oauth2/default/v1/authorize?client_id=0oa5ahrdfSpxmNZO74h6&amp;response_type=token+id_token&amp;scope=openid&amp;scope=simple_report&amp;redirect_uri=https://simplereport.cdc.gov/app&amp;nonce=thisisnotsafe&amp;state=thisisbogus,https://demo.simplereport.gov/app,' _site/index.html
  az storage blob upload-batch -s _site/ -d '$web' --account-name simplereportdemoapp --destination-path '/'
elif [ "$1" == "dev" ]; then
  echo "Deploying the static landing page to $1"
  sed -i 's,https://hhs-prime.okta.com/oauth2/default/v1/authorize?client_id=0oa5ahrdfSpxmNZO74h6&amp;response_type=token+id_token&amp;scope=openid&amp;scope=simple_report&amp;redirect_uri=https://simplereport.cdc.gov/app&amp;nonce=thisisnotsafe&amp;state=thisisbogus,https://dev.simplereport.gov/app,' _site/index.html
  az storage blob upload-batch -s _site/ -d '$web' --account-name simplereportdevapp --destination-path '/'
elif [ "$1" == "test" ]; then
  echo "Deploying the static landing page to $1"
  sed -i 's,https://hhs-prime.okta.com/oauth2/default/v1/authorize?client_id=0oa5ahrdfSpxmNZO74h6&amp;response_type=token+id_token&amp;scope=openid&amp;scope=simple_report&amp;redirect_uri=https://simplereport.cdc.gov/app&amp;nonce=thisisnotsafe&amp;state=thisisbogus,https://test.simplereport.gov/app,' _site/index.html
  az storage blob upload-batch -s _site/ -d '$web' --account-name simplereporttestapp --destination-path '/'
elif [ "$1" == "beta" ]; then
  echo "Deploying the static landing page to $1"
  az storage blob upload-batch -s _site/ -d '$web' --account-name usdssimplereportbeta --destination-path '/'
fi
