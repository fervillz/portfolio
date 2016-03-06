module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none',
					cacheLocation: 'sass/.cache-location',
				},
				files: [{
					'style.css': 'sass/style.scss',
				}],
			},
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'style.min.css': ['style.css']
				}
			}
		},

		autoprefixer:{
			dist: {
				files: {
					'style.css': 'style.css',
				},
			},
		},

		watch: {
			options: {
				livereload: false,
			},
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer', 'cssmin'],
			},
		},

		jshint: {
			all: ['Gruntfile.js', 'scripts/scripts.js'],
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
	grunt.registerTask('minify', ['cssmin']);
};