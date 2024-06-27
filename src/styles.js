import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCenter = styled.div`
  background: white;
  padding: 30px 20px;
  border: none;
  border-radius: 5px;
  
  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

export const InputList = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 10px;
`;

export const ButtonList = styled.button`
  background: #8052EC;
  border-radius: 5px;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  height: 40px;
  border: none;
  color: #FFFFFF;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
  box-shadow: 1px 4px 10px rgba(0, 17, 30, 0.51);
  border-radius: 5px;
  height: 60px;
  margin: 10px 0;
  padding: 0 10px;
  justify-content: space-between;

  li {
    list-style: none;
  }
`;
