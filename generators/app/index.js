'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mustache = require('mustache');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic ' + chalk.red('generator-osticket') + ' generator!'
    ));

    var prompts = [{
      name: 'Plugin name',
      message: 'What would you like to call thsi plugin?',
      default: "MyPlugin"
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('config.mustache'),
      this.destinationPath('config.php')
    );
    this.fs.copy(
      this.templatePath('plugin.mustache'),
      this.destinationPath('plugin.php')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
