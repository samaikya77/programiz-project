import React from 'react';

function Pandas() {
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
      <h1>Welcome to Pandas Learning</h1>
      <p>
        Learn Pandas programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>Pandas is an open-source Python library that provides powerful tools for data manipulation and analysis, particularly for working with structured, tabular data such as spreadsheets.</p>
    </div>
  );
}

export default Pandas;
