import styled from "styled-components"

export const Header = styled.div`
  width: 500px; 
  position: absolute;
`

export const SearchBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${({theme})=>theme.atrColor};
  border-radius: 10px;
  margin-top: 50px;
  padding: 5px;
`
export const LightModeSwitcher = styled.h2`
  color: ${({theme})=>theme.color};
  cursor: pointer;
  position: absolute;
  right: 0px;
`

export const SearchInput = styled.input`
  width: 250px;
  border: none;
  background-color: transparent;
  font-size: 17px;
  outline:none;
  color: ${({theme})=>theme.color};
  margin: 10px 10px;
  position: absolute;

  ::placeholder {
    color: ${({theme})=>theme.color};
  }
`

export const Btn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #0079FF;
  font-size: 17px;
  outline:none;
  color: white;
  margin-top: 5px;
  position: absolute;
  right:0px;
  border-radius: 10px;
  cursor: pointer;
`

export const App = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme})=>theme.backgroundColor};
  display: flex;
  justify-content: center;
`
