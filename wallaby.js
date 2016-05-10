var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({
  debug: true
});

module.exports = function (w) {
  return {
    files: [{
      pattern: 'static/components/jquery/jquery.js',
      load: false,
      instrumented: false
    }, {
      pattern: 'static/js/apps/stream/models/wallaby*',
      load: false, // will not be loaded
      instrument: true // will not be executed
    }],
    tests: [{
      pattern: 'static/js/apps/stream/models/tests/wallaby.coffee',
      load: false
    }],
    debug: true,
    testFramework: 'mocha',
    compilers: {
      '**/*.coffee': w.compilers.coffeeScript({noFileRename: true})
    },
    postprocessor: wallabyPostprocessor,
    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};