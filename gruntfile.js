module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: 'app/styles/*.scss',
        tasks: ['sass']
      }
    },
    sass: {  
      dist: {
        files: {
          'app/styles/style.css': 'app/styles/style.scss'
        }      
      }            
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'app/styles/style.css',
            'app/*.html',
            "app/**/*.js"            
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './app'            
          },                    
        }
      }
    },
  });

  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync','watch']);

};