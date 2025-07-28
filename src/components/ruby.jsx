import React from 'react';

function Ruby() {
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
      <h1>Welcome to Ruby Learning</h1>
      <p>
        Learn Ruby programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      
    </div>
  );
}

export default Ruby;