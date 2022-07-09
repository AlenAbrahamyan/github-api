import * as Styled from "./styled"

export const JoinedData = ({ user, theme }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  const year = user.created_at.slice(0, 4)
  const month = user.created_at.slice(5, 7)
  const day = user.created_at.slice(8, 10)

  return (
    <Styled.JoinedData theme={theme}>Joined {day} {monthNames[month-1]} {year}</Styled.JoinedData>
  )
}
