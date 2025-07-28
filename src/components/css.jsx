import React from 'react';

function Css() {
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
      <h1>Welcome to CSS Learning</h1>
      <p>
        Learn CSS programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>CSS is the design language of the web it's what makes everything you see online visually appealing and interactive.</p>
    </div>
  );
}

export default Css;
