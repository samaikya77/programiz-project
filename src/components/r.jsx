import React from 'react';

function R() {
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
      <h1>Welcome to R Learning</h1>
      <p>
        Learn R programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>R is a powerful, open-source language widely used in data analysis, statistics, and machine learning.</p>
    </div>
  );
}

export default R;