'use strict';
module.exports = function(grunt) {
    [
        'grunt-contrib-watch',
        'grunt-contrib-clean',
        'grunt-contrib-copy',
        'grunt-contrib-less'
    ].forEach(function(task) { grunt.loadNpmTasks(task); });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: {
                src: [
                    '!less/**.less',
                    '!less/lib/*.css',
                    'less/*.css',
                ]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '',
                    dest: '',
                    src: [
                        '*',
                        'less/**',
                    ],
                    filter: 'isFile'
                }]
            }
        },

        less: {
            development: {
                options: {
                    paths: ['less'],
                    ieCompat: false,
                    sourceMap: true
                },
                files: {
                    'css/style.css': 'less/styles/style.less',
                    'css/custom-animations.css': 'less/animations.less'
                }
            }
        },

        watch: {
            less: {
                files: ['**/*.less'],
                tasks: ['less:development']
            },
            livereload: {
                options: { livereload: true },
                files: ['**']
            }
        }
    });

    grunt.registerTask('develop', ['watch']);

    grunt.registerTask('production', ['clean', 'less:development', 'copy']);

    grunt.registerTask('default', ['clean', 'less:development', 'copy']);
};
