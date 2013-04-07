// https://github.com/gruntjs
// http://gruntjs.com

// global module:false
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
		' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

		// ========================
		// Tasks
		// ========================

		// == Concatenation
		concat: {
			dist: {
				src: ['js/plugins.js', 'js/main.js'],
				dest: 'js/grunt/concat/main-concat.js'
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					require: true,
					define: true,
					requirejs: true,
					describe: true,
					expect: true,
					it: true
				}
			}
		},
		uglify: {
			dist: {
				src: 'js/grunt/concat/main-concat.js',
				dest: 'js/minified/main-min.js'
			}
		}
	});
	
	//Grunt Tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task.
	grunt.registerTask('default', ['jshint', 'concat',  'uglify']);
};