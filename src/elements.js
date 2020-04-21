import styled from 'styled-components'

const colors = {
  backgroundColor: '#e1e6eb',
  textGrey: '#afbdcb',
  textBlack: '#354352',
  textGreen: '#5eb77f',
  highlightGrey: '#eff2f6',
  boxShadow: ' rgba(0, 0, 0, 0.25)',
}

export const AppContainer = styled.div`
  width: 650px;
  height: 757px;
  background: ${colors.backgroundColor};
`
export const Heading = styled.h1`
  font-size: 34px;
  color: ${colors.textBlack};
  margin: 50px;
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
  font-size: 14px;
  color: ${colors.textBlack};
  font-weight: 500;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.textGrey};
    font-size: 14px;
    font-weight: 500;
  }
`
export const Container = styled.div`
  width: 530px;
  min-height: 58px;
  border-radius: 5px;
  paddidng: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0 1px 3px ${colors.boxShadow};
  background: white;
`
export const TableLine = styled.tr`
  background: white;
  padding: 10px 20px;
  height: 58px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: ${colors.highlightGrey};
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
  font-size: 15px;
  width: 400px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`
export const TextContainer = styled.div`
  font-weight: 500;
  color: ${colors.textBlack};
`
export const DoneTextContainer = styled.div`
  color: ${colors.textGreen};
  text-decoration: line-through;
  font-weight: 500;
`
export const ContentBox = styled.div`
  height: 30px;
  font-size: 12px;
  width: 400px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
export const LeftIcon = styled(Icon)`
  margin-right: 20px;
`
export const PencilIcon = styled(LeftIcon)`
  background-image: url('./pencil.svg');
  filter: invert(85%) sepia(13%) saturate(319%) hue-rotate(170deg)
    brightness(86%) contrast(90%);
`
export const DoneIcon = styled(LeftIcon)`
  background-image: url('./done.svg');
  filter: invert(67%) sepia(68%) saturate(292%) hue-rotate(89deg)
    brightness(84%) contrast(83%);
`
export const UndoneIcon = styled(LeftIcon)`
  background-image: url('./undone.svg');
`
export const TrashIcon = styled.td`
  background-image: url('./trash.svg');
  width: 13px;
  height: 13px;
  margin-right: 10px;
`
export const ClearAllContainer = styled.div`
  height: 150px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textGrey};
  font-weight: 700;
  text-transform: uppercase;
`
export const ClearAll = styled.div`
  width: 100px;
  height: 30px;
  align-items: center;
  display: flex;
`

export const EmptyPrompt = styled.div`
  text-align: left;
  padding-left: 60px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.textGrey};
`
export const Regular = styled.div`
  font-size: 14px;
`
export const EmptySpace = styled.div`
  height: 53px;
`
