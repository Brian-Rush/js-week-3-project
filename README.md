# TeamManager
## Description

This is a web app that helps managers of soccer (and other sports) teams manage their rosters.

## Setup Instructions

* Clone the repo.
* Navigate to the cloned directory in Terminal.
* [Install Node](https://nodejs.org/en/download/package-manager/ "Node installation documentation") if its not already and [initialize Node Package Manager](https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/introducing-npm-and-gulp) (npm).
* In Terminal, type "npm install" to install the necessary back-end dependencies.
* In Terminal, type "bower install" to install the necessary front-end dependencies.
* Create a [Firebase](https://firebase.google.com) account, or if you already have a Google account, sign in.
* Once you've created an account or signed in, you should be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.

* You'll then be taken to an "Overview" area. Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Keep the information in this modal handy, we'll use it in just a moment.

* Now that your database exists, in Terminal download a package called AngularFire using the following command "npm install angularfire2@4.0.0-rc.0 firebase --save"

* If Terminal returns the following error, "Module not found: Error: Can't resolve 'promise-polyfill' in `.../firebase/app'`", install the promise-polyfill package by using this command: "npm install promise-polyfill --save-exact"

* One more step -- add a line to the tsconfig.json file at the very end to mention Firebase. Your file should now read '..."lib": [
      "es2016",
      "dom"
    ],
    "types": [ "firebase" ]
  }
}"'

* Create a new file called api-keys.ts in the src/app directory.
* The code in this file should look like this: export var masterFirebaseConfig = { apiKey: "xxxx", authDomain: "xxxx.firebaseapp.com", databaseURL: "https://xxxx.firebaseio.com", storageBucket: "xxxx.appspot.com", messagingSenderId: "xxxx" };  Except all instances of 'xxxx' should be populated with your specific Firebase credentials.

* Then, if you will be storing this code anywhere public, like Github, to keep your credentials private, add the following to your .gitignore file: "... #Firebase credentials /src/app/api-keys.ts ..."


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known bugs

* There are no known bugs at this time, but, as of July 14, 2017, this is far from a fully fleshed-out project.

## Technologies Used

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0. and SASS.

### License

MIT

©2017 **Brian Rush**
