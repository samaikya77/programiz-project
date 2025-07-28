import React from 'react';

function C() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column', // this is the key to stack h1 and p
        textAlign: 'center',     // center the text inside
        padding: '20px'          // optional: space around text
      }}
    >
      <h1>Welcome to C++ Learning</h1>
      <p>
        Learn C++ programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>C++ is a leading programming language used in game development, virtual reality, real-time simulation and high-frequency trading, where efficiency and speed matter.</p>
    </div>
  );
}

export default C;

