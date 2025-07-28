import React from 'react';

function Sql() {
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
      <h1>Welcome to SQL Learning</h1>
      <p>
        Learn SQL programming from scratch with easy-to-understand tutorials,
        practical examples, and step-by-step guidance.
      </p>
      <p>SQL, or Structured Query Language, is the standard language to access and manage data. It is used in different industries like IT, finance, healthcare, and research.</p>
    </div>
  );
}

export default Sql;