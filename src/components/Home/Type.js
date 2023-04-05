import React from 'react';
import TypeWriter from 'typewriter-effect';
const Type = () => {
  return (
    <TypeWriter
      options={{
        strings: [
          'Software Engineer II at JP Morgan and Chase',
          'MERN Stack Developer',
          'Java Full Stack Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    ></TypeWriter>
  );
};
export default Type;
