import React from 'react';

function Swift() {
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
      <h1>Welcome to Swift Learning</h1>
      <p>
        Learn Swift programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>Swift is the modern programming language in the world, widely used in fields such as iOS app development, macOS development, and server-side programming.</p>
    </div>
  );
}

export default Swift;
