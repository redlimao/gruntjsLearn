module.exports = function(grunt){ 
	//每一份Gruntfile都遵循同样的格式，你所书写的Grunt代码必须放在此函数内；
  	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	uglify: {
      		options: {
        		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      		},
      		build: {
        		src: 'src/<%= pkg.name %>.js',
        		dest: 'build/<%= pkg.name %>.min.js'
      		}
    	}
  	});

  	// 加载包含 "uglify" 任务的插件。
  	grunt.loadNpmTasks('grunt-contrib-uglify');

  	// 默认被执行的任务列表。
  	grunt.registerTask('default', ['uglify']);
};