const inquirer = require('inquirer');
const { spawn } = require('child_process');
const { Spinner } = require('clui');
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What do you want to create?',
    choices: ['Component', 'Directive'],
    filter: function(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'input',
    name: 'name',
    message: `Give it a name:`,
    filter: function (val) {
      return val.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }
];

clear();

console.log(
  chalk.cyan(
    figlet.textSync('Fundbox UI', {
      horizontalLayout: 'full'
    })
  )
);

inquirer
  .prompt(questions)
  .then(answers => {
    const command = `npx hygen ${answers.type} new --name ${answers.name}`;
    const loader = new Spinner("Building...");
    let process = spawn(command, {
      shell: true
    });
    let paths = [];

    console.log('');
    loader.start();

    process.stdout.on('data', (data) => {
      let line = data.toString().trim();
      if (line.indexOf('added:') == 0) {
        const file = line.replace('added: ', '');
        paths.push(file);
      }
    });

    process.on('exit', (code) => {
      loader.stop();

      if (code !== 0) {
        console.log(chalk.red('Error!'));
      } else {
        console.log(chalk.green('Done!'), chalk.cyan('Here\'s what have been created:'));
        paths.forEach(file => console.log(file));
        console.log('');
      }
    });
  });
