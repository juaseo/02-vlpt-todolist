import React from 'react';
import { createGlobalStyle } from 'styled-components'
import TodoTamplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <TodoTamplate>
      <TodoHead />
      <TodoList />
    </TodoTamplate>
    </>
  );
}

export default App;
