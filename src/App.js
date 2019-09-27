import React from 'react';
import './App.css';
import Typist from 'react-typist';
import Typing from 'react-typing-animation';


var bg = ["https://media.giphy.com/media/l3UcrZHrGW2CjHXqM/giphy.gif",
  "https://media.giphy.com/media/7bEpr3NIPNY0E/giphy.gif",
  "https://media.giphy.com/media/k5zu35npVsYfgZQwwl/giphy.gif",
  "https://media.giphy.com/media/pHZ8BBgLaXPliFNudh/giphy.gif",
  "https://media.giphy.com/media/x45I8CY1Vs45G/giphy.gif",
  "https://media.giphy.com/media/wKnqovL33x9in9ci6X/giphy.gif",
]

function getbackground() {
  var min = 0
  var max =5
  min = Math.ceil(min);
  max = Math.floor(max);
  var pos = Math.floor(Math.random() * (max - min + 1)) + min;
  return bg[pos]
}

function App() {  
  return (
    <div class="background" style={{ backgroundImage: 'url(' + getbackground() + ')' }} >
      <div class="logo">       
          <b>
            Jai
          <span>d</span>
            ee
           <span>p </span>
            Ke
          <span>K</span>
            r
          <span>e</span>
          </b>
      </div>
      <div class="typer">
      <Typing loop={true} speed={250}>
        PYTHON
        <Typing.Backspace count={9} />
        <Typing.Delay ms={1000} />
        GO LANG
        <Typing.Backspace count={9} />
        <Typing.Delay ms={1000} />
        REACT JS 
        <Typing.Backspace count={9} />
        <Typing.Delay ms={1000} />
        APACHE SPARK
        <Typing.Backspace count={14} />
        <Typing.Delay ms={1000} />
        APACHE KAFKA
        <Typing.Backspace count={14} />
        <Typing.Delay ms={1000} />
        RABBIT MQ
        <Typing.Backspace count={14} />
        <Typing.Delay ms={1000} />
        NGINX
        <Typing.Backspace count={14} />
        </Typing>
      </div>
      {/* <audio src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg"  autoPlay /> */}

    </div>
  );
}

export default App;
