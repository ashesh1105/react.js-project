import React from 'react';
import ReactDOM from 'react-dom';
import BabelTransformer from './components/babel-transformer';

const Hello = () => {
  return (
    <div>Hello from Node with React!</div>
  );
}

// ReactDOM.render(
//   <BabelTransformer />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
