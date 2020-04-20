import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let  posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 23},
    {id: 2, message: 'It\'s my ferst post', likesCount: 5},
    {id: 3, message: 'Hellooo', likesCount: 5},
    {id: 4, message: 'YYeeesss', likesCount: 5},
    {id: 5, message: 'Whyyy', likesCount: 5}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
