#!/bin/sh

git pull
npm install
gem install bundler
bundle install
npm run build

if [ "$1" == "demo" ]; then
  echo "Deploying the static landing page to $1"
  sed -i 's,https://hhs-prime.okta.com/oauth2/default/v1/authorize?client_id=0oa5ahrdfSpxmNZO74h6&response_type=token_id_token&scope=openid&scope=simple_report&redirect_uri=https://simplereport.cdc.gov/app&nonce=thisisnotsafe&state=thisisbogus,https://demo.simplereport.org/app,' _site/index.html
  az storage blob upload-batch -s _site/ -d '$web' --account-name usdssimplereportdemo --destination-path '/'
elif [ "$1" == "beta" ]; then
  echo "Deploying the static landing page to $1"
  az storage blob upload-batch -s _site/ -d '$web' --account-name usdssimplereportbeta --destination-path '/'
fi
