module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        // compila arquivos less
        less: {
            style: {
                src: 'less/style.less',
                dest: 'content/css/style.css',
                options: {
                    yuicompress: true
                }
            }
        },

        // watch pra dev
        watch: {
            files: 'less/**',
            tasks: 'less'
        },

        'http-server': {
            'dev': {
                root: "content",
                port: 8080,
                host: "0.0.0.0",
                cache: 1,
                showDir : true,
                autoIndex: true,
                ext: "html",
                runInBackground: true,
                openBrowser : true
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');

    // dev mode: so compila less
    grunt.registerTask('default', ['http-server:dev', 'watch']);
        
};