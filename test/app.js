'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-osticket:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({pluginName: 'Something'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'config.php'
    ]);
  });
});
