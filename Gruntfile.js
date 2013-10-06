'use strict';

module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {

      options: {
        livereload: 31345,
      },

      server: {
        options: {
          nospawn: true 
        },
        
        files: ['server.js'],
        tasks: ['express']
      },

      client: {
        files: ['client/**/*'],
        tasks: ['build']
      },

      other: {
        files: [
          'app.html',
          'public/css/buttsoup.css',
          'public/js/speakClient.js',
          'public/js/speakWorker.js'
        ],
        tasks: []
      }
    },

    concat: {

      client: {
        options: {
          banner: grunt.file.read('BANNER') + '$(function(){\n\'use strict\';\n\n',
          footer: '});\n'
        },
        src: [
          'client/utils.js',
          'client/app.js',
          'client/colors.js',
          'client/message.js',
          'client/user.js',
          'client/main.js'
        ],
        dest: 'public/js/client.js'
      }
    },
    
    express: {
      options: {
        port: 5000
      },
      
      server: {
        options: {
          script: 'server.js'
        }
      }
    }
  });

  grunt.registerTask('build', function() {
    grunt.task.run('concat');
  });

  grunt.registerTask('default', function() {

    grunt.option('force', true);

    grunt.task.run([
      'build',
      'express',
      'watch'
    ]);
  });
};
