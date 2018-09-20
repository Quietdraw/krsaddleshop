# LOCAL DEVELOPMENT NOTES

- Add SSH Key to GitHub User Account that has access to this repo
- For Managing Multiple SSH Keys - good article is:
- https://medium.com/@trionkidnapper/ssh-keys-with-multiple-github-accounts-c67db56f191e
- https://github.com/settings/keys
- $pbcopy < ~/.ssh/id_rsa_quietdraw.pub
- Clone this repo locally and change directory into it
- Update your Local Git Config to match your Approved GitHub User
- $ git config user.email "brian@quietdraw.com"
- $ git config user.name  "quietdraw-brian"
- $ git config credential.username "quietdraw-brian"

## PRE-REQUISITES

- We are currently using Netsuite version Name: Mont Blanc
- Please use NVM to install and switch Node version = 4.4.x (4.4.7)
- $ nvm install 4.4; nvm use v.4.4.7
- Gulp --global or per repo depending on dependencies of the repo

## LOCAL SERVER

- Install all the Node Modules
- $ npm install
- $ gulp local
- Gulp will packack up all the changes we make into JS files that run on the Sandbox server URL
- You can verify changes navigating to: 
- http://kingranch.production.netsuitestaging.com/sca-dev-montblanc/shopping-local.ssp 

## WORKING WITH THE CODE REPO

- Most files for theming (HTML, CSS, JS) will be in:
- /Modules
- /Modules/site (base theme)
- /Modules/css (Add On Features - NOT Cascading Style Sheets)
- /Modules/suitecommerce (normally we don't change these - but good to know how the framework is designed)
- /Modules/third_parties (3rd party vendor code)
- ./distro.json

## DEPLOY CODE TO SANDBOX

- // $ npm deploy ??? -> then follow CLI -> make sure to deploy to DEV environment 

## DEPLOY CODE TO PRODUCTION