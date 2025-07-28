import React from 'react';

function Kotlin() {
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
      <h1>Welcome to Kotlin Learning</h1>
      <p>
        Learn Kotlin programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>Kotlin is a modern, concise and efficient language developed by JetBrains, widely used in Android development and server-side applications.</p>
    </div>
  );
}

export default Kotlin;
