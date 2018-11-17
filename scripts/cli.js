/* eslint no-console: 0 */
const path = require('path');
const inquirer = require('inquirer');
const { spawn } = require('child_process');
const { Spinner } = require('clui');
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

const fbxColorModifier = chalk.hex('#00bd9c');
let error = null;

function capitalize(str) {
  return  str.charAt(0).toUpperCase() + str.substr(1);
}

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What do you want to create?',
    choices: ['Component', 'Directive'],
    filter(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'input',
    name: 'name',
    message: `Give it a name:`,
    filter: capitalize
  }
];

clear();

console.log(
  fbxColorModifier(
    figlet.textSync('Fundbox UI', {
      horizontalLayout: 'full'
    })
  )
);

inquirer
  .prompt(questions)
  .then(answers => {
    const command = `npx hygen ${answers.type} new --name ${answers.name}`;
    const loader = new Spinner('Generating...');
    let childProcess = spawn(command, {
      shell: true
    });
    let paths = [];

    console.log('');
    loader.start();

    childProcess.stdout.on('data', (data) => {
      let line = data.toString().trim();

      if (line.indexOf('exists') > -1) {
        loader.stop();
        error = `${capitalize(answers.type)} already exists.`;
        childProcess.kill('SIGHUP');
      }

      if (line.indexOf('added:') > -1) {
        let filePath = line.replace('added: ', '');
        let fileName = path.basename(filePath);
        filePath = filePath.replace(fileName, '');
        paths.push(`  ${fbxColorModifier('➜')} ${chalk.gray(filePath)}${fileName}`);
      }
    });

    childProcess.on('exit', (code) => {
      loader.stop();

      if (code === 0) {
        console.log(chalk.green('Done!'), fbxColorModifier("Here's what's been created:"));
        paths.forEach(file => console.log(file));
        console.log('');
      } else {
        console.log(chalk.red(error || 'Error! Something went wrong.'), '\n');
      }
    });
  });
