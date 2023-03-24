import TypeWriter from 'typewriter-effect';

const Type = () => {
  return (
    <TypeWriter
      options={{
        strings: [
          'Senior Software Engineer',
          'MERN Stack Developer',
          'Java Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    ></TypeWriter>
  );
};
export default Type;
