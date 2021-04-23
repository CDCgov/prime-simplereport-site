#!/bin/bash

printf 'Waiting for site to start...'
curl -k http://localhost:4000 > /dev/null 2>&1
result=$?

polls=0
while [[ $result -ne 0 && $polls -lt 180 ]]; do
  ((polls++))
  printf .
  sleep 1
  curl -k http://localhost:4000 > /dev/null 2>&1
  result=$?
done
echo

if [[ $result -ne 0 ]]; then
  echo 'Site never started. Exiting...'
  exit 1
fi

echo 'Site is online! Starting Nightwatch...'

npx nightwatch -e "$@"