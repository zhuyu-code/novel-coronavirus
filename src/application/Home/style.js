import styled from 'styled-components';
import image from "../../assets/logo2.jpeg"
export const Top=styled.div`
    display:flex;
    justify-content: center;
    align-items: flex-start;
    width:100%;
    height:200px;
    background:url("${image}");
    background-size:100% 100%;
`;
export const Tab=styled.div`
height: 44px;
display: flex;
flex-direction: row;
justify-content: space-around;
a {
  flex: 1;
  padding: 2px 0;
  font-size: 14px;
  color: #000000;
  &.selected {
    span {
      padding: 5px 0;
      font-weight: 700;
      color: green;
      border-bottom: 2px solid green;
    }
  }
}
`;
export const TabItem=styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;