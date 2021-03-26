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
    
    //et widthRemainder = element.clientWidth % 50;
    let element= document.getElementById('container')
     //Add it as a child of <body>
     createMatrixOfDots(element);

     window.setInterval(function() {
       element.removeChild(element.firstChild);
       //.innerHTML = '';
       //createMatrixOfDots(element);
       element.appendChild(createRowOfDots(element.clientWidth));
     }, 1000);  
  });


  function createMatrixOfDots(element, circleSize) {
    console.log(`${element.clientWidth} and ${element.clientHeight}`)
    for (let i = 0; i < Math.floor(element.clientHeight/50); i++) {
      
      element.appendChild(createRowOfDots(element.clientWidth));
    }
  }

  function createRowOfDots(width) {

    let row = document.createElement("div");
    row.className = 'row';
    for (let i = 0; i < Math.floor(width/50); i++) {
      let canvas = draw(getColor());
      row.appendChild(canvas);
    }
    return row;
  }

  function draw(color, size) {
    let canvas = document.createElement("canvas"); //Create canvas
    canvas.height = '50';
    canvas.width = '50';
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(25, 25, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    return canvas;
  }

  function getColor() {
    //if (number % 4 === 0) return 'pink';
    //else if (number % 3 === 0) return 'white';
    //else if (number % 2 === 0) return 'orange';
    //else return 'green'
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }