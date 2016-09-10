module.exports = function(grunt) {

  grunt.initConfig({
    // watch: {
    //   dev: {
    //     files: [
    //       'www/**/*.html'
    //       , 'www/**/*.js'
    //       , 'www/**/*.css'
    //     ]
    //     , tasks: ['clean', 'bower', 'copy']
    //   }
    // }
    clean: {
      options: {
        force: true
      }
      , dev: 'docs/**/*'
    }
    , copy: {
      dev: {
        files: [
          {
            expand: true
            , cwd: 'www'
            , src: '**'
            , dest: 'docs/'
          }
        ]
      }
    }
    , bower: {
      dev: {
        base: 'bower_components'
        , dest: 'docs/lib'
        , options: {
          checkExistence: true
          , debugging: true
          , paths: {
            bowerDirectory: 'bower_components'
            , bowerrc: '.bowerrc'
            , bowerJson: 'bower.json'
          }
        }
      }
    }
    , browserSync: {
      dev: {
        bsFiles: {
        src : [
          'www/**/*.html'
          , 'www/**/*.js'
          , 'www/**/*.css'
        ]
      }
      , options: {
          server: {
            baseDir: "www"
            // , watchTask: true
            , routes: {
              "/lib": "bower_components"
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('main-bower-files');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['browserSync']);
  grunt.registerTask('deploy', ['clean', 'bower', 'copy']);
};
