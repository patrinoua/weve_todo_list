import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'

const ListContainer = styled.div`
  width: 650px;
  height: 800px;
  background: #e1e6eb;
`
const Header = styled.h1`
  font-size: 1.5em;
  color: #354352;
  padding-top: 50px;
`
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  width: 530px;
  min-height: 60px;
  border-radius: 5px;
  background: beige;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`
const TableLine = styled.tr`
  background: white;
  padding: 10px 20px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #eff2f6;
  }
`
const Table = styled.table`
  border-spacing: 0;
`
const InputLine = styled.div`
  background: white;
  padding: 10px 20px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`
const TableContentBox = styled.td`
  height: 30px;
  font-size: 0.7em;
  color: #5eb77f;
  width: 400px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`
const ContentBox = styled.div`
  height: 30px;
  font-size: 0.7em;
  color: #5eb77f;
  width: 400px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  // background: black;
  // margin: 10px 10px;
  &:hover {
    cursor: pointer;
  }
`
const LeftIcon = styled(Icon)`
  margin-right: 20px;
`
const PencilIcon = styled(LeftIcon)`
  background-image: url('./pencil.svg');
`
const DoneIcon = styled(LeftIcon)`
  background-image: url('./done.svg');
`
const UndoneIcon = styled(LeftIcon)`
  background-image: url('./undone.svg');
`
const TrashIcon = styled.td`
  background-image: url('./trash.svg');
  width: 15px;
  height: 15px;
`
const TextContainer = styled.div``

const SearchBar = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`

function App() {
  const [items, setItems] = useState([
    { id: 1, done: true, text: 'Get up early' },
    { id: 2, done: true, text: 'Do some meditation' },
    { id: 3, done: false, text: 'eat a healthy breakfast' },
    { id: 4, done: false, text: 'Drink plenty of water' },
    { id: 5, done: false, text: 'Exercise' },
    { id: 6, done: false, text: 'Have fun' },
  ])

  const trashHandler = (id) => {
    const newItems = [...items]
    const itemIndex = newItems.findIndex((item) => item.id === id)
    newItems.splice(itemIndex, 1)
    setItems(newItems)
  }
  const tickHandler = (id) => {
    const newItems = [...items]
    const itemIndex = newItems.findIndex((item) => item.id === id)
    newItems[itemIndex].done = !newItems[itemIndex].done
    setItems(newItems)
  }
  const listItem = ({ id, done, text }) => (
    <TableLine key={id}>
      <td onClick={() => tickHandler(id)}>
        {done ? <DoneIcon /> : <UndoneIcon />}
      </td>
      <TableContentBox>
        <TextContainer>{text}</TextContainer>
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
                  <SearchBar placeholder="What needs to be accomplished?" />
                </ContentBox>
              </InputLine>
            </Container>
            <br />
            <Container>
              <Table>
                <tbody>{items.map((item) => listItem(item))}</tbody>
              </Table>
            </Container>
          </SearchContainer>
        </ListContainer>
      </header>
    </div>
  )
}

export default App
