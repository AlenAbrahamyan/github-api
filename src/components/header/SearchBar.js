import * as Styled from "./styled"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchUserData } from "../../features/userSlice"
export const SearchBar = ({ theme }) => {
  const [serachingUser, setSearchingUser] = useState("")
  const dispatch = useDispatch()

  return (
    <Styled.SearchBar theme={theme}>
      <img src="/search-icon.png" width={40} alt="" />
      <Styled.SearchInput
        placeholder="Search GitHub username..."
        onChange={(e) => setSearchingUser(e.target.value)}
        theme={theme}
      />
      <Link to={`/${serachingUser}`}>
        <Styled.Btn
          onClick={() => dispatch(fetchUserData(serachingUser))}
          theme={theme}
        >
          Sarch
        </Styled.Btn>
      </Link>
    </Styled.SearchBar>
  )
}
