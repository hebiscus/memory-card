import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// getElementById can possibly return error. Possible ways to solve: 1) catching the possible null and throwing error as a result, 
// 2. const root = document.getElementById("root") as HTMLElement,
// 3. using non-null assertion operator "!" -> "The non-null assertion operator tells the TypeScript compiler that a value typed as optional cannot be null or undefined"
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

