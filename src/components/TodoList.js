import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
  function TodoList() {
		return (
		<TodoListBlock>
			<TodoItem text="투두 크리에트 만들기!" done={true}/>
			<TodoItem text="context Api 상태관리" done={true}/>
			<TodoItem text="기능구현하기" done={false}/>
		</TodoListBlock>
		)
  } 

	export default TodoList;