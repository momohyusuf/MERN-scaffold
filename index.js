#!/usr/bin/env node

import inquirer from 'inquirer';
import Rx from 'rxjs';
import path, { dirname } from 'node:path';
import fs from 'node:fs';

// functions to handle each type of application creation
import {
  create_backend_application,
  create_frontend_application,
} from './controllers/index.js';
import { replace_white_space_with_under_score } from './utils/helpers.js';

const prompts = new Rx.Subject();

function create_application_folder(app_name) {
  fs.mkdirSync(`${replace_white_space_with_under_score(app_name)}`);
}

// an array to store previous prompts
let previousPrompts = [];

// Start the prompt process
inquirer.prompt(prompts).ui.process.subscribe(
  (answers) => {
    // destructuring name from answers
    // this makes it easy to work with the value a user provides on each prompt
    const { name, answer } = answers;
    previousPrompts.push(answer);

    // // handle folder creation for the application
    // if (name === 'application name') {

    // }

    // determine what type of application the user want to build
    if (name === 'frontend component library') {
      // check if user wants to create a frontend application
      if (previousPrompts[1] === 'Frontend') {
        create_application_folder(
          replace_white_space_with_under_score(previousPrompts[0])
        );
        create_frontend_application(
          replace_white_space_with_under_score(previousPrompts[0]),
          previousPrompts[2]
        );
      }

      // check if user wants to create a backend application
      if (previousPrompts[1] === 'Backend') {
        create_application_folder(
          replace_white_space_with_under_score(previousPrompts[0])
        );
        create_backend_application(
          replace_white_space_with_under_score(previousPrompts[0])
        );
      }
      // check if user wants to create a fullstack application
      if (previousPrompts[1] === 'Fullstack') {
        create_application_folder(
          `${replace_white_space_with_under_score(previousPrompts[0])}_frontend`
        );

        create_frontend_application(
          `${replace_white_space_with_under_score(
            previousPrompts[0]
          )}_frontend`,
          previousPrompts[2]
        );
        create_application_folder(
          `${replace_white_space_with_under_score(previousPrompts[0])}_backend`
        );
        create_backend_application(
          `${replace_white_space_with_under_score(previousPrompts[0])}_backend`
        );
      }
    }
  },
  (error) => {
    console.error('Error:', error);
  },
  (answers) => {
    // Handle completion
    console.log(
      `Application successfully created 🚀🚀 \nCd into ${previousPrompts[0]} and run npm install to begin. \nhappy hacking 💻💻💻`
    );
  }
);

// Push new questions
prompts.next({
  type: 'input',
  name: 'application name',
  message: 'Enter application name',
});

prompts.next({
  type: 'list',
  name: 'application type',
  choices: ['Frontend', 'Backend', 'Fullstack'],
});

// if user selected frontend framework
// ask the user which of these component frame work they would like to install

prompts.next({
  type: 'list',
  name: 'frontend component library',
  choices: ['Ant design', 'Material UI', 'None'],
  when: (value) => value['application type'] === 'Frontend' || 'Fullstack',
});

// Complete the prompts
prompts.complete();
