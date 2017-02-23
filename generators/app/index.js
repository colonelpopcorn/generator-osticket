'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic ' + chalk.red('osTicket plugin') + ' generator!'
    ));

    var prompts = [
    {
      name: 'description',
      message: 'Give me a general description of your plugin.',
      default: 'A really awesome plugin that makes your life easier!'
    },
    {
      name: 'pluginName',
      message: 'What would you like to call this plugin?',
      default: 'MyPlugin'
    },
    {
      name: 'version',
      message: 'What version are you starting out with?',
      default: '1.0.0'
    },
    {
      name: 'url',
      message: 'Where can we find you on the web?',
      default: 'https://myawesomeplugin.com'
    }
  ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('config.php'),
      this.destinationPath(this.props.pluginName + '/config.php'),
      {
        pluginName: this.props.pluginName + 'Config',
        fields: '\'id\' \=\> \'colonelpopcorn\'' + '\:' + this.props.pluginName
      });
      this.fs.copyTpl(
        this.templatePath('plugin.php'),
        this.destinationPath(this.props.pluginName + '/plugin.php'),
        {
          description: this.props.description,
          author: 'Jonathan Ling',
          username: 'colonelpopcorn',
          pluginName: this.props.pluginName,
          version: this.props.version,
          pluginPresentationName: this.props.pluginName.replace(/([A-Z])/g, ' $1') + ' Plugin',
          url: this.props.url
        });
  },

  install: function () {
    this.installDependencies();
  }
});
