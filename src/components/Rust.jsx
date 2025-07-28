import React from 'react';

function Rust() {
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
      <h1>Welcome to Rust Learning</h1>
      <p>
        Learn Rust programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>Rust is designed for high performance, speed, and safety. It has been voted one of the most loved programming languages for more than five years in StackOverflow's survey.</p>
    </div>
  );
}

export default Rust;
