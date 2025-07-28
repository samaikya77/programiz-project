import React from 'react';

function Numpy() {
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
      <h1>Welcome to Numpy Learning</h1>
      <p>
        Learn Numpy programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>NumPy (Numerical Python) is a widely used open-source Python library that provides support for numerical computing and efficient handling of large, multi-dimensional arrays and matrices.</p>
    </div>
  );
}

export default Numpy;