// Example of a typical configuration
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            'karma-jasmine',
            'karma-jasmine-html-reporter',
            'karma-coverage',
            'karma-coverage-istanbul-reporter',
            '@angular-devkit/build-angular/plugins/karma',
            'karma-sonarqube-reporter',
            'karma-chrome-launcher'
        ],
        client: {
            clearContext: false
        },
        coverageIstanbulReporter: {
            reports: ['lcovonly'],
            fixWebpackSourcePaths: true
        },
        sonarqubeReporter: {
            basePath: 'src/app', // test files folder
            filePattern: '**/*spec.ts', // test files glob pattern
            encoding: 'utf-8', // test files encoding
            outputFolder: 'reports', // report destination
            legacyMode: false, // report for Sonarqube < 6.2 (disabled)
            reportName: function (metadata) {
                // report name callback, but accepts also a
                // string (file name) to generate a single file
                /**
                 * Report metadata array:
                 * - metadata[0] = browser name
                 * - metadata[1] = browser version
                 * - metadata[2] = plataform name
                 * - metadata[3] = plataform version
                 */
                return 'sonarqube_report.xml';
            },
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: ['progress', 'kjhtml', 'sonarqube', 'coverage-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome_no_sandbox'],
        customLaunchers: {
            Chrome_no_sandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        singleRun: false
    });
};

