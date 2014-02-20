
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true,
          hostname: 'localhost'
        }
      }
    },
    watch: {
      html: {
        files: ['**/*.html', '**/*.js', '**/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['connect', 'watch']);
}
