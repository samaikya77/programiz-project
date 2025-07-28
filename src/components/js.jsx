import React from 'react';

function Js() {
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
      <h1>Welcome to Javascript Learning</h1>
      <p>
        Learn Javascript programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>JavaScript is the most popular programming language used in the field of website development.

Also, the simple and easy to understand syntax makes JavaScript a good language to start programming.</p>
    </div>
  );
}

export default Js;
