import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  padding: 5px 15px;  
  display: flex;
  width: 100px;
  height: 30px;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 250ms linear;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
  
  &:not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
  
    color: #17101e;
    transition: all 0.2s;
  }
  &:nth-child(2) {
    :hover,
    :focus {
       color: #18066a;
      background-color: #11dbf19e;
      box-shadow: 0px 0px 17px 6px #0080ffb0;
      
    }
  }
  &:nth-child(3) {
    :hover,
    :focus {
       color: #580404;
      background-color: #f1101072;
      box-shadow: 0px 0px 17px 6px #ff00009c;
    }
  }
  &:nth-child(1) {
    :hover,
    :focus {
       color: #043407;
      background-color: #06fa16aa;
 box-shadow: 0px 0px 17px 6px #01ae45;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
padding: 0;
`;