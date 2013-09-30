module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      p: {
        files: {
          "target/styles.css": "app/**/*.less",
        }
      }
    },
    watch: {
      less: {
        files: ['app/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: false,
          livereload: true
        }
      },
      partials: {
        tasks: ['ngtemplates'],
        files: ['app/*/**/*.html'],
        options: {
          nospawn: false,
          livereload: true
        }
      },
      index: {
        tasks: ['preprocess:all'],
        files: ['app/index.html'],
        options: {
          nospawn: false,
          livereload: true
        }
      },
      js: {
        tasks: ['uglify', 'karma'],
        files: ['!app/components/*', 'app/**/*.js', 'test/**/*.js'],
        options: {
          nospawn: false,
          livereload: true
        }
      },
    },
    uglify: {
      options: {
        mangle: false,
        // compress: false,
        // beautify: true
      },
      t: {
        files: {
          'target/app.min.js': ['app/**/*.js','!app/components/**/*.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          // {expand: true, src: ['*/*.html'], dest: 'target/', cwd:'app/'},
          {expand: true, src: ['**/*'], dest: 'target/components', cwd:'app/components'}
        ]
      }
    },
    clean: ['target/**'],
    compress: {
      main:{
        options: {
          archive: 'dist.zip'
        },
        files: [
          {cwd: 'target/', src:['**/*'], expand:true }
        ]
      }
    },
    preprocess:{
      all: {
        src: './app/index.html',
        dest: './target/index.html'
      }
    },
    env: {
      dev:{
        NODE_ENV: 'DEVELOPMENT'
      }
    },
    ngtemplates: {
      app: {
        options:{
          module: 'app',
          base: 'app'
        },
        src: ['app/**/*.html', '!app/index.html', '!app/components/*'],
        dest: 'target/templates.js'
      }
    },
    karma: {
      unit: {
        configFile: 'config/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['clean', 'less', 'uglify', 'copy', 'preprocess:all', 'compress']);
  grunt.registerTask('dev', ['clean', 'less', 'uglify', 'copy', 'env:dev', 'preprocess:all']);
  grunt.registerTask('go', ['clean', 'less', 'uglify', 'copy', 'ngtemplates', 'env:dev', 'preprocess:all', 'karma', 'watch']);
};