import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FaTrash, FaCheck } from "react-icons/fa";
import { Container, ContainerCenter, InputList, ButtonList, ListItem } from '../src/styles';

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada", finished: true }]);
  const [inputTask, setInputTask] = useState('');

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function clickButton() {
    if (inputTask.trim()) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
      setInputTask('');
    }
  }

  function finishTask(id) {
    const newList = list.map(item => 
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <ContainerCenter>
        <InputList value={inputTask} onChange={inputMudou} placeholder="O que é para fazer....." />
        <ButtonList onClick={clickButton}>Adicionar</ButtonList>
        <ul>
          {list.map(item => (
            <ListItem key={item.id} isFinished={item.finished}>
              <FaCheck onClick={() => finishTask(item.id)} />
              <span>{item.task}</span>
              <FaTrash onClick={() => deleteTask(item.id)} />
            </ListItem>
          ))}
        </ul>
      </ContainerCenter>
    </Container>
  );
}

export default App;
