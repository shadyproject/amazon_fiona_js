module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        karma: {
			options: {
				configFile: 'test/karma.conf.js',
				browsers: ['Chrome'],
				reporters: ['dots','coverage']
			},

			ci: {
				singleRun: true,
				browsers: ['PhantomJS']
			},

			dev: {
				reporters: 'dots',
				singleRun: false,

				browsers: ['Chrome', 'PhantomJS'],

				/* The background option will tell grunt to run karma in a child process so it doesn't block subsequent grunt tasks. */
				background : true
			}
		},

      watch : {
        karma : {
          files : ['fiona-lib.js', 'test/**/*.js'],
          tasks : ['karma:dev:run']
        }
      }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['karma:ci']);
    grunt.registerTask('dev-watch', ['karma:dev:start','watch:karma']);

};
