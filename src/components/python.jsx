import React from 'react';

function Python() {
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
      <h1>Welcome to Python Learning</h1>
      <p>
        Learn Python programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>Python is one of the top programming languages in the world, widely used in fields such as AI, machine learning, data science, and web development.</p>
      
    </div>
  );
}

export default Python;