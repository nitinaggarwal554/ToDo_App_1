var webpackConfig=require('./webpack.config.js');

module.exports=function(config){
    config.set({
        browsers :['Chrome'],
        singleRun:true,
        frameworks :['mocha'],
        files:['app/tests/**/*.test.js'],
        preprocessors:{
            'app/tests/**/*.test.js':['webpack','sourcemap']
        },

        reporters:['mocha'],
      
        reporters:['progress','html'],
        htmlReporter:{
            outputFile:'mytest/units.html',
        
        pageTitle: 'my unit test report',
        subPageTitle:'A Simple test report app of mocha test',
        useLegacyStyle:true
    },

        client:{
            mocha:{
                timeout:'5000'
            }
        },
        webpack :webpackConfig,
        webpackServer:{
            noInfo:true
        }
    })
}