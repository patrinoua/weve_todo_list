import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 650px;
  height: 800px;
  background: #e1e6eb;
`
export const Header = styled.h1`
  font-size: 1.5em;
  color: #354352;
  padding-top: 50px;
`
export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SearchBar = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`
export const Container = styled.div`
  width: 530px;
  min-height: 60px;
  border-radius: 5px;
  paddidng: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  background: white;
`
export const TableLine = styled.tr`
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
export const Table = styled.table`
  border-spacing: 0;
`
export const InputLine = styled.div`
  background: white;
  padding: 10px 20px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`
export const TableContentBox = styled.td`
  height: 30px;
  font-size: 0.65em;
  width: 400px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`
export const TextContainer = styled.div``
export const DoneTextContainer = styled.div`
  color: #5eb77f;
  text-decoration: line-through;
`
export const ContentBox = styled.div`
  height: 30px;
  font-size: 0.7em;
  color: #5eb77f;
  width: 400px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`

export const ClearAllContainer = styled.div`
  height: 200px;
  font-size: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Icon = styled.div`
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
export const LeftIcon = styled(Icon)`
  margin-right: 20px;
`
export const PencilIcon = styled(LeftIcon)`
  background-image: url('./pencil.svg');
`
export const DoneIcon = styled(LeftIcon)`
  background-image: url('./done.svg');
`
export const UndoneIcon = styled(LeftIcon)`
  background-image: url('./undone.svg');
`
export const TrashIcon = styled.td`
  background-image: url('./trash.svg');
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
export const EmptyPrompt = styled.div`
  text-align: left;
  padding-left: 30px;
  font-size: 0.8em;
`
export const Regular = styled.div`
  font-size: 0.8em;
`
