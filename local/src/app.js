'use strict';

obtain(['./src/wallControl.js'], ({ valves })=> {
  exports.app = {};

  var _ = 1;

  var test = [[_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],

              /////////////////////////////////////
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],

              /////////////////////////////////////
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, _, 0, _, _, 0, 0, 0, 0, 0, 0],
              [_, _, _, _, _, _, _, 0, 0, 0, 0, 0],
              [_, _, _, _, _, _, _, 0, 0, 0, 0, 0],
              [0, _, _, _, _, _, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, _, 0, 0, _, 0, _, 0, 0],
              [0, 0, 0, _, 0, 0, _, _, _, _, _, 0],
              [0, 0, 0, 0, 0, 0, _, _, _, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, _, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, _, 0, 0, 0],

              /////////////////////////////////////
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, 0, 0, 0, 0, 0, 0, 0, 0, _, 0],
              [0, _, _, 0, 0, 0, 0, 0, 0, _, _, 0],
              [0, 0, _, _, _, _, _, _, _, _, 0, 0],
              [0, 0, 0, _, _, _, _, _, _, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  /*var test = [[_, 0, 0, 0, _, 0, 0, _, _, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0],
              [_, 0, 0, 0, _, 0, _, 0, 0, _, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, 0, 0, 0, _, 0, _, 0, 0, _, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, 0, 0, 0, _, 0, _, 0, 0, _, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, 0, _, 0, _, 0, _, 0, 0, _, 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, _, 0, _, _, 0, _, 0, 0, _, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, 0, 0, 0, _, 0, 0, _, _, 0, 0, 2, 0, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

              //////////////////////////////////////
              [_, 0, 0, _, 0, _, _, _, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, 0, _, _, 0],
              [_, 0, 0, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, 0, 0, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, _, _, _, 0, _, _, _, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, 0, 0, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, 0, 0, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, 0, 0, _, 0, _, _, _, _, 0, _, _, _, _, 0, _, _, _, _, 0, 0, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  ];*/

  var count = 0;

  window.onbeforeunload = ()=>{
    valves.allOff();
  }

  exports.app.start = ()=> {
    console.log('started');

    document.onkeyup = (e)=> {
      var electron = require('electron');
      if (e.which == 27) {
        valves.allOff();
        electron.remote.process.exit();
      }
    };

    setInterval(()=> {
      valves.drawRaster(test, Date.now() + 50);
    }, (test.length + 10) * valves.pixel.height);

  };

  provide(exports);
});
