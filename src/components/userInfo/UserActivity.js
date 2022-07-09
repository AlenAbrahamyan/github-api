import * as Styled from "./styled"

export const UserActivity = ({user, theme}) => {
  return (
    <Styled.ActivityTable theme={theme}>
      <tbody>
        <tr>
          <th>Repos</th>
          <th>Followers</th>
          <th>Following</th>
        </tr>
        <tr>
          <td>{user.public_repos}</td>
          <td>{user.followers}</td>
          <td>{user.following}</td>
        </tr>
      </tbody>  
    </Styled.ActivityTable>
  )
}
