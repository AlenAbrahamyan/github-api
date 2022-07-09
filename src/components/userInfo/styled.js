import styled from "styled-components"

export const UserInfoContainer = styled.div`
  width: 500px;
  padding: 5px;
  background-color: ${({theme})=>theme.atrColor};
  margin-top: 120px;
  border-radius: 10px;
  position: absolute;
  height: 400px;
`

export const JoinedData = styled.p`
  font-size: 12px;
  color: ${({theme})=>theme.color};
  position: absolute;
  right: 15px;
`
export const ProfileImg = styled.img`
width:100px;
border-radius: 100px;
margin: 50px 25px;
position absolute;
`

export const User = styled.img`
  width: 100px;
  border-radius: 100px;
  margin: 50px 25px;
`

export const UserName = styled.h1`
  font-size: 20px;
  color: ${({theme})=>theme.color};
  display: inline;
  position: absolute;
  margin: 50px 140px;
  list-style: none;
  width: 300px;
`
export const UserLogin = styled.h4`
  font-size: 14px;
  color: #0079FF;
  margin: 75px 140px;
  position absolute;
  width: 300px;
`

export const Bio = styled.p`
  font-size: 13px;
  color: ${({theme})=>theme.color};
  margin: 100px 140px;
  position absolute;
  width: 300px;
`

export const GreyText = styled.p`
  color: grey;
  display: inline;
`

export const NotFound = styled.p`
  color: red;
  position: absolute;
  margin-top: 65px;
  margin-left: 200px;
`

export const ActivityTable = styled.table`
  border: none;
  padding: 5px;
  text-align: center;
  color: #FFFFFF;
  background-color: ${({theme})=>theme.backgroundColor};
  border-radius: 10px;
  position: absolute;
  margin: 160px 140px;
  font-size: 14px;

  > th {
    padding: 20px;
  }
  td {
    padding: 5px 40px;
  }
`

export const ContactsTable = styled.table`
  border: none;
  padding: 5px;
  text-align: center;
  color: ${({theme})=>theme.color};
  border-radius: 10px;
  position: absolute;
  margin: 270px 10px;
  font-size: 14px;

  > th {
    padding: 20px;
  }
  td {
    padding: 5px 15px;
  }
`

export const Redirect = styled.a`
  color: ${({theme})=>theme.color};
  text-decoration:none;
  :hover{
    color:grey;
    text-decoration: underline;
  }
`
