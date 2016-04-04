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
		}		
});

    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.registerTask('default', ['imagemin']);
};