import * as Styled from "./styled"
import {SearchBar} from "./SearchBar"
import { LightModeSwitcher } from "./LightModeSwitcher"

const Header = ({theme}) => {

  return (
    <Styled.Header>
      <LightModeSwitcher theme={theme}/>
      <SearchBar theme={theme}/>
    </Styled.Header>
  )
}

export default Header