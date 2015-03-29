var react = require('react');
var td = require('throttle-debounce');

// function _createVmZone(givenReporter:Function): VmTurnZone {
//   var defaultErrorReporter = (exception, stackTrace) => {
//     var longStackTrace = stackTrace.join("\n\n-----async gap-----\n");
//     console.error(`${exception}\n\n${longStackTrace}`);
//     throw exception;
//   };
//
//   var reporter = isPresent(givenReporter) ? givenReporter : defaultErrorReporter;
//
//   var zone = new VmTurnZone({enableLongStackTrace: assertionsEnabled()});
//   zone.initCallbacks({onErrorHandler: reporter});
//   return zone;
// }

function bootstrap(cmp, el) {

   // var render = td.throttle(120, () => {
   //    console.log('afterTask');
   //    React.render(cmp, el);
   // });

   zone
      //.fork({ afterTask: render })
      .fork({ afterTask: function () {
         console.log('afterTask');
         React.render(cmp, el);
      } })
      .run(function () {
         console.log('run');
         React.render(cmp, el);
      });
}

module.exports.bootstrap = bootstrap;
