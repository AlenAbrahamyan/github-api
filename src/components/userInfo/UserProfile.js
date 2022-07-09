import * as Styled from "./styled"

export const UserProfile = ({user, theme}) => {
  return(
    <div style={{position:"absolute"}}>
      <Styled.ProfileImg src={user.avatar_url}/>
      <Styled.UserName theme={theme}>{user.name ? user.name : user.login}</Styled.UserName>
      <Styled.UserLogin>@{user.login}</Styled.UserLogin>
      <Styled.Bio theme={theme}>{user.bio ? user.bio : "This profile has no bio"}</Styled.Bio>
    </div>
  )
} 