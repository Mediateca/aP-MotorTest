module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify']
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            src: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'dist',
                    ext: '.min.js'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{ expand: true, cwd: 'src/sass', src: '**/*.scss', dest: 'dist/assets/css', ext: '.min.css' }]
            }
        },
        copy: {
            main: {
                files: [{
                        expand: true,
                        src: [
                            'node_modules/angular/angular.min.js',
                            'node_modules/angular/angular.min.js.map',
                            'node_modules/angular-animate/angular-animate.min.js',
                            'node_modules/angular-animate/angular-animate.min.js.map',
                            'node_modules/angular-aria/angular-aria.min.js',
                            'node_modules/angular-aria/angular-aria.min.js.map',
                            'node_modules/angular-route/angular-route.min.js',
                            'node_modules/angular-route/angular-route.min.js.map',
                            'node_modules/angular-material/angular-material.min.js',
                            'node_modules/angular-material/angular-material.min.js.map',
                            'node_modules/ng-quill/dist/ng-quill.min.js',
                            'node_modules/quill/dist/quill.min.js',
                            'node_modules/quill/dist/quill.min.js.map',
                            'node_modules/katex/dist/katex.min.js'
                        ],
                        dest: 'dist/assets/js/',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: [
                            'node_modules/angular-material/angular-material.min.css',
                            'node_modules/quill/dist/quill.snow.css',
                            'node_modules/katex/dist/katex.min.css'
                        ],
                        dest: 'dist/assets/css/',
                        flatten: true
                    }
                ],
            },
        }
        /*,
                ftp_push: {
                    your_target: {
                        options: {
                            authKey: "",
                            host: "",
                            dest: "/",
                            port: 21
                        },
                        */
        //files: [{expand: true, cwd: 'dist', src: '**/*'}]
        /*
            }
        }*/
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-push');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('actualizar', ['copy', 'sass', 'uglify']);
    //grunt.registerTask('deploy', ['copy', 'sass', 'uglify', 'ftp_push']);
};
