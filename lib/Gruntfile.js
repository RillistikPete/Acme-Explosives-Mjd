module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
        js: {
            src: ['../javascript/main.js'],
            dest: '../dist/app.js'
        },
        options: {
            browserifyOptions: {
              debug: true,
              paths: ["./node_modules"]
            }
        }
      },
    jshint: {
      files: ['../javascript/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        browserify: true,
        globals: {"Sandwich":true} //name value pairs, allows to define global vars used in many files.
      }
    },
    // sass: { //setup sass compilation
    //   dist: {
    //     files: {
    //       '../css/styles.css': '../sass/styles.scss'
    //     }
    //   }
    // },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascript/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      // sass: {
      //   files: ['../sass/**/*.scss'],
      //   tasks: ['sass']
      //}
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};