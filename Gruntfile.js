module.exports = function(grunt) {

  grunt.initConfig({
    browserSync: {
      bsFiles: {
        src : [
          './docs/**/*.html'
          , './docs/**/*.js'
          , './docs/**/*.css'
        ]
      }
      , options: {
        server: {
          baseDir: "./docs"
          , routes: {
            "/lib": "bower_components"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync']);
};
