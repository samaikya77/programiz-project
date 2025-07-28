import React from 'react';

function Html() {
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
      <h1>Welcome to HTML Learning</h1>
      <p>
        Learn HTML programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>HTML is the foundation of web development,it's the language that structures everything you see online.</p>
    </div>
  );
}

export default Html;