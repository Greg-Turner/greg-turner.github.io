module.exports = function(grunt) {
    
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON("package.json"),
            watch: {
                scripts: {
                  files: ["scripts/*.js"],
                  tasks: ["uglify"],
                  options: {
                    spawn: false
                  }
                }
            },
            uglify: {
                options: {
                    banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
                },
                build: {
                    files: [
{
                        expand: true,
                        cwd: "scripts",
                        src: "*.js",
                        dest: "build",
                        ext: ".min.js"
                    }
]
                }
            },
            eslint: {
                all: ["scripts/*.js"],
                options: {
                  config: "conf/eslint.json",
                  rulesDir: "conf/rules"
                }
              }
        });
    
        // Load the plugin that provides the tasks.
        grunt.loadNpmTasks("grunt-contrib-uglify");
        grunt.loadNpmTasks("grunt-contrib-watch");
        grunt.loadNpmTasks("grunt-browserify");
        
    
        // Default task(s).
        grunt.registerTask("default", [
        "uglify",
        "watch",
        "browserify"
        ]);
            
    };