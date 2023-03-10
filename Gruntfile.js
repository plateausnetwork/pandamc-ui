module.exports = function(grunt) {
    grunt.initConfig({
        version: {
          project: {
            src: ['package.json']
          }
        }
      });
      grunt.loadNpmTasks('grunt-version');
      // the default task can be run just by typing "grunt" on the command line
grunt.registerTask('default', ['grunt-version']);
  };