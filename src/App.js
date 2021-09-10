import React from 'react';
import { createGlobalStyle } from 'styled-components'
import TodoTamplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTamplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTamplate>
    </TodoProvider>
  );
}

export default App;
