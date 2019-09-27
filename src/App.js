import React from 'react';
import './App.css';
import Typist from 'react-typist';
import Typing from 'react-typing-animation';

function App() {
  return (
    <div class="background">
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
      <audio src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg"  autoPlay />

    </div>
  );
}

export default App;
