module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
          css: {
              files: '**/*.css',
              tasks: ['cssmin'],
              options: {
                  livereload: true
              }
          },
          html: {
              files: ['index.html','**/*.css'],
              options: {
                  livereload: true
              }
          }
        },
        uglify: {
          options: {
            mangle: true,
            mangle: {
              except: ['jQuery'],
            }
          },
          javascript: {
            files: {
              'build/release.js': ['release.js'],
            }
          }
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'build/css.css': ['css.css']
            }
          }
        },
        htmlmin: {                                     // Task
          dist: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              removeRedundantAttributes: true,
              caseSensitive: true,
            },
            files: {                                   // Dictionary of files
              'build/index.html': 'index.html',     // 'destination': 'source'
            }
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['watch', 'uglify', 'cssmin', 'htmlmin']);
}
