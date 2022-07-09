import * as Styled from "./styled"
import { getUserData, isUserNotFound } from "../../features/userSlice"
import { JoinedData } from "./JoinedData"
import { UserActivity } from "./UserActivity"
import { UserProfile } from "./UserProfile"
import { useSelector } from "react-redux"
import { UserContacts } from "./UserContacts"

const UserInfo = ({theme}) => {
  const userData = useSelector(getUserData)
  const userNotFound = useSelector(isUserNotFound)

  return (
    <>
      {userNotFound ? (<Styled.NotFound>No results</Styled.NotFound>

      ) : (
        <Styled.UserInfoContainer theme={theme}>
        <JoinedData user={userData} theme={theme}/>
        <UserProfile user={userData} theme={theme}/>
        <UserActivity user={userData} theme={theme}/>
        <UserContacts user={userData} theme={theme}/>
      </Styled.UserInfoContainer>
      )}
    </>
  )
}

export default UserInfo
