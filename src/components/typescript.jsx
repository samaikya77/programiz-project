import React from 'react';

function Typescript() {
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
      <h1>Welcome to Typescript Learning</h1>
      <p>
        Learn TS programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>TypeScript is a popular programming language built on top of JavaScript, widely used in modern web development.</p>
    </div>
  );
}

export default Typescript;