const Choreographer = require('choreographer-js')

let choreographer = new Choreographer({
    animations: [    
      {
        range: [-1, window.innerWidth / 2],
        selector: '#box',
        type: 'change',
        style: 'transform:translateY',
        to: 300,
        unit: 'px'
      }
    ]
  })
  
  document.body.addEventListener('mousemove', (e) => {
    choreographer.runAnimationsAt(e.clientX)
  })
  init()