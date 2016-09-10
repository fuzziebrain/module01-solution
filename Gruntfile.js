module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: [
        'docs/**/*.html'
        , 'docs/**/*.js'
        , 'docs/**/*.css'
      ]
      , tasks: []
    }
    , wiredep: {
      task: {
        src: ['docs/**/*.html']
      }
    }
    , browserSync: {
      dev: {
        options: {
          server: {
            baseDir: "./docs"
            , watchTask: true
            // , routes: {
            //   "/lib": "bower_components"
            // }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['wiredep', 'browserSync', 'watch']);
};
