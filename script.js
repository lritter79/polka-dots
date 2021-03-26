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
    var element =  document.getElementById('container');
    console.log(`${element.clientWidth} and ${element.clientHeight}`)
    //et widthRemainder = element.clientWidth % 50;
    for (let i = 0; i < Math.floor(element.clientWidth/50); i++) {
      let canvas = draw(getColor(i));
      element.appendChild(canvas);
    }
     //Add it as a child of <body>
  });

  function draw(color) {
    let canvas = document.createElement("canvas"); //Create canvas
    canvas.height = '50';
    canvas.width = '50';
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color === 'white' ? 'black' : color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(25, 25, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    return canvas;
  }

  function getColor(number) {
    if (number % 4 === 0) return 'pink';
    else if (number % 3 === 0) return 'white';
    else if (number % 2 === 0) return 'orange';
    else return 'green'
  }