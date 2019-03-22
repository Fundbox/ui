#!/bin/bash -e

echo "##teamcity[blockOpened name='UI Tests']"

# Set up NVM and proper node version
NVM_WORKDIR='/usr/local/nvm'
[ -s "$NVM_WORKDIR/nvm.sh" ] && . "$NVM_WORKDIR/nvm.sh"
export PATH=/opt/node_install/bin:`pwd`/node_modules/.bin/:$PATH

echo "##teamcity[blockOpened name='INSTALLING NPM PACKAGES']"
nvm use
npm ci
echo "##teamcity[blockClosed name='INSTALLING NPM PACKAGES']"

echo "##teamcity[blockOpened name='LINT']"
npm run lint
echo "##teamcity[blockClosed name='LINT']"

echo "##teamcity[blockOpened name='UNIT TESTS']"
npm test
echo "##teamcity[blockClosed name='UNIT TESTS']"

echo "##teamcity[blockClosed name='UI Tests']"
