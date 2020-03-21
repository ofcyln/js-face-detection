[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/ofcyln/logo-scene.svg?branch=master)](https://travis-ci.com/ofcyln/logo-scene)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/efad5270fac34f25a4fc78bacb0a1e83)](https://app.codacy.com/manual/ofcyln/logo-scene?utm_source=github.com&utm_medium=referral&utm_content=ofcyln/logo-scene&utm_campaign=Badge_Grade_Dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/64952354fa293cc18a4b/maintainability)](https://codeclimate.com/github/ofcyln/logo-scene/maintainability)

# Logo Scene - Prototype Scene Creator

## Using project 

### On live environment

The final app hosted on <a alt="Logo Scene screenshot" target="_blank" href="https://logo-scene.firebaseapp.com">https://logo-scene.firebaseapp.com</a>

### On local environment

Run these commands in the terminal to run the app on your local environment

    git clone https://github.com/ofcyln/logo-scene.git

    npm install

    npm start

or if you use yarn as package manager

    git clone https://github.com/ofcyln/logo-scene.git

    yarn

    yarn start

### Development server

Run `npm start` or `yarn start` for a dev server to initialize. 
Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## App's Motivation
* I've created this project to see the logo of my new project on the screen with a variety of changes for example logo background color, logo brand name, brand name color, font type, font size, positions of the logo and brand name.
* You can change the logo with yours easily by replacing the logo in the 'assets/logo' folder. I suggest you to add SVG logo because everything on the screen is scalable.

## Screenshots

### App Screenshot
<a alt="Logo Scene screenshot" target="_blank" href="https://logo-scene.firebaseapp.com">
  <img src="https://logo-scene.firebaseapp.com/src/assets/screenshots/logo-scene-screenshot.png" width="75%" />
</a>

### Exaple Logos
<div style="margin-top: 30px">
  <img src="https://logo-scene.firebaseapp.com/src/assets/screenshots/logo-scene-example.jpg" width="45%" />
</div>

<div style="margin-top: 30px">
  <img src="https://logo-scene.firebaseapp.com/src/assets/screenshots/logo-scene-example-2.jpg" width="45%" />
</div>

<div style="margin-top: 30px">
  <img src="https://logo-scene.firebaseapp.com/src/assets/screenshots/logo-scene-example-3.jpg" width="45%" />
</div>

<div style="margin-top: 30px">
  <img src="https://logo-scene.firebaseapp.com/src/assets/screenshots/logo-scene-example-4.jpg" width="45%" />
</div>

## Upcoming improvements
* Take a screenshot of the logo scene and save it on your local machine
* Saving the logo scene with transparent background
* Re-calculate boundaries of the screen on change of the window size
* More options to edit brand name's styles and logo scene itself
