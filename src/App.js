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
        Python
        <Typing.Backspace count={8} />
        <Typing.Delay ms={1000} />
        Go Lang
        <Typing.Backspace count={8} />
        <Typing.Delay ms={1000} />
        ReactJS 
        <Typing.Backspace count={8} />
        <Typing.Delay ms={1000} />
        Apache Spark
        <Typing.Backspace count={13} />
        <Typing.Delay ms={1000} />
        Apache Kafka
        <Typing.Backspace count={13} />
        <Typing.Delay ms={1000} />
        RabbitMQ
        <Typing.Backspace count={13} />
        <Typing.Delay ms={1000} />
        Nginx
        <Typing.Backspace count={13} />
        </Typing>
        </div>

    </div>
  );
}

export default App;
