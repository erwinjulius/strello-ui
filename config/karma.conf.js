module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'components/angular/angular.js',
      'components/angular-resource/angular-resource.js',
      'components/angular-mocks/angular-mocks.js',
      'components/angular-route/angular-route.js',
      'components/underscore/underscore.js',
      'components/angular-elastic/elastic.js',

      'app/**/*.js',
      
      'test/**/*.js'
    ],
    browsers: ['PhantomJS']
  });
};