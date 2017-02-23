'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic ' + chalk.red('generator-osticket') + ' generator!'
    ));

    var prompts = [{
      name: 'pluginName',
      message: 'What would you like to call thsi plugin?',
      default: 'MyPlugin'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('config.php'),
      this.destinationPath('config.php'),
      {
        pluginName: this.props.pluginName,
        fields: 'someoptions'
      });
  },

  install: function () {
    this.installDependencies();
  }
});
