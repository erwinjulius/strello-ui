module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'app/components/angular/angular.js',
      'app/components/angular-resource/angular-resource.js',
      'app/components/angular-mocks/angular-mocks.js',

      'app/**/*.js',
      
      'test/**/*.js'
    ],
    exclude: [
      'app/components/bootstrap/**/*.js',
      'app/components/jquery/**/*.js'
    ],
    browsers: ['PhantomJS']
  });
};