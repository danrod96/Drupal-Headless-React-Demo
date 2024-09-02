# Drupal Headless React Demo

This is a Github package that contains the Drupal App and React App ready to be launched for testing how the Drupal Headless + React integration works with a simple React App that renders a few blog nodes pulled from the REST API Endpoint already setup in the Drupal instance.

This is a starting work, you can extend your React App to do more by exposing more Drupal REST APIs to interact from React App to do things like: pulling Drupal Bocks to be rendered in the decoupled frontend and much more !

## Prerequisites

These packages need to be installed:
- DDEV / Docker
- Node v16 or higher

## Installation

### Drupal Instance

1. Clone your project as usual: https://github.com/danrod96/Drupal-Headless-React-Demo

2. Go to the **drupal-app** directory and run `composer install` to get all the Drupal modules and dependencies.

3. Run `ddev config` to setup your DDEV Instance, then run `ddev import` and import the db (provided in the repo: drupal-app-endpoints.sql.gz):

`ddev import drupal-app-endpoints.sql.gz`

4. Open the site, log in using `drush uli` and go to https://drupal-app.ddev.site/admin/content , you'll see a list of Blog Posts (NodeJS, GoLang, etc) please open and update the images and content as desired.

5. Open the file web/sites/default/settings.yml to set up the cors settings, clear cache.

6. Make sure the REST Export is working: https://drupal-app.ddev.site/blog-articles

### React App

1. Go to the **react-app** directory and run `npm install` to install the latest JS packages needed

2. Then run `npm run start` to run your React App, a new browser tab will popup to load the app at https://localhost:3000

You should see the blog nodes