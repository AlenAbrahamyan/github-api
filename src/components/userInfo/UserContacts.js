import * as Styled from "./styled"

export const UserContacts = ({user, theme}) => {
  return (
    <Styled.ContactsTable theme={theme}>
      <tbody>
        <tr>
          <th>Location:</th>
          <td>{user.location ? user.location: <Styled.GreyText>Not Available</Styled.GreyText>}</td>
          <th>Twitter:</th>
          <td>{user.twitter_username ? user.twitter_username: <Styled.GreyText>Not Available</Styled.GreyText>}</td>
        </tr>
        <tr>
          <th>Blog:</th>
          <td>{user.blog ? <Styled.Redirect href={user.blog}>{user.blog}</Styled.Redirect>: <Styled.GreyText>Not Available</Styled.GreyText>}</td>
          <th>Company:</th>
          <td>{user.company ? user.company: <Styled.GreyText>Not Available</Styled.GreyText>}</td>
        </tr>
      </tbody>
    </Styled.ContactsTable>
  )
}
