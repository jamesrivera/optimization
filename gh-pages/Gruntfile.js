module.exports = function(grunt) {
    grunt.initConfig({
        imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: '.',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'compressed/'
				}]
			}
		},
		inline: {
			dist: {
				options:{
					cssmin: true,
					tag: ''
				},
				src: './*.html',
				dest: 'compressed/'
			}
		}		
});

    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-inline");
    grunt.registerTask('default', ['imagemin', 'inline']);
};