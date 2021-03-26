//gets the ready state wihtout jquery, this confirms that everything is loaded
//source: https://learnwithparam.com/blog/vanilla-js-equivalent-of-jquery-ready/
function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
      // Document is already ready, call the callback directly
      console.log('not loadin anymore')
      callbackFunc();
    } else if (document.addEventListener) {
      // All modern browsers to register DOMContentLoaded
      console.log('still loading, so add an evnt listener to call the callback whenit wraps up loading')
      document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
      // Old IE browsers
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
          callbackFunc();
        }
      });
    }
  }
  
  ready(function() {
    console.log('im ready');
    let canvas = draw();
    document.getElementById('container').appendChild(canvas); //Add it as a child of <body>
  });

  function draw() {
    let canvas = document.createElement("canvas"); //Create canvas
    return canvas;
  }