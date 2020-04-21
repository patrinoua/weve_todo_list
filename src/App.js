import React, { useState } from 'react'
import './App.css'
import {
  TableLine,
  DoneIcon,
  UndoneIcon,
  TrashIcon,
  PencilIcon,
  TableContentBox,
  DoneTextContainer,
  TextContainer,
  ListContainer,
  Header,
  SearchContainer,
  Container,
  InputLine,
  ContentBox,
  SearchBar,
  Table,
  ClearAllContainer,
  Regular,
  EmptyPrompt,
} from './elements'

function App() {
  const [items, setItems] = useState([
    { id: 1, done: true, text: 'Get up early' },
    { id: 2, done: true, text: 'Do some meditation' },
    { id: 3, done: false, text: 'Eat a healthy breakfast' },
    { id: 4, done: false, text: 'Drink plenty of water' },
    { id: 5, done: false, text: 'Exercise' },
    { id: 6, done: false, text: 'Have fun' },
  ])
  const [text, setText] = useState('')
  const trashHandler = (id) => {
    const newItems = [...items]
    const itemIndex = newItems.findIndex((item) => item.id === id)
    newItems.splice(itemIndex, 1)
    setItems(newItems)
  }
  const trashAllHandler = () => {
    setItems([])
  }
  const tickHandler = (id) => {
    const newItems = [...items]
    const itemIndex = newItems.findIndex((item) => item.id === id)
    newItems[itemIndex].done = !newItems[itemIndex].done
    setItems(newItems)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      inputHandler(e)
    }
  }
  const inputHandler = (e) => {
    if (e.target.value) {
      const newItem = {
        id: items.length + 1,
        done: false,
        text: e.target.value,
      }
      const newItems = [...items, newItem]
      setItems(newItems)
      setText('')
    }
  }
  const listItem = ({ id, done, text }) => (
    <TableLine key={id}>
      <td onClick={() => tickHandler(id)}>
        {done ? <DoneIcon /> : <UndoneIcon />}
      </td>
      <TableContentBox>
        {done ? (
          <DoneTextContainer>{text}</DoneTextContainer>
        ) : (
          <TextContainer>{text}</TextContainer>
        )}
      </TableContentBox>
      <TrashIcon onClick={() => trashHandler(id)} />
    </TableLine>
  )
  return (
    <div className="App">
      <header className="App-header">
        <ListContainer>
          <Header>REACT TO-DO</Header>
          <SearchContainer>
            <Container>
              <InputLine>
                <PencilIcon />
                <ContentBox>
                  <SearchBar
                    placeholder="What needs to be accomplished?"
                    onBlur={(e) => inputHandler(e)}
                    onKeyUp={(e) => handleKeyDown(e)}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </ContentBox>
              </InputLine>
            </Container>
            <br />
            <Container>
              {items.length === 0 && (
                <EmptyPrompt>
                  <Regular>Add some things to your to do list!</Regular>
                </EmptyPrompt>
              )}
              <Table>
                <tbody>{items.map((item) => listItem(item))}</tbody>
              </Table>
            </Container>
          </SearchContainer>
          <ClearAllContainer>
            {items.length ? (
              <>
                <TrashIcon onClick={() => trashAllHandler()} />
                <Regular>Clear all</Regular>
              </>
            ) : (
              ''
            )}
          </ClearAllContainer>
        </ListContainer>
      </header>
    </div>
  )
}

export default App
