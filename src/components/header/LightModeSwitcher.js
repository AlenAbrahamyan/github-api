import * as Styled from "./styled"
import { changeLightMode, getLightMode } from "../../features/lightModeSlice"
import { useDispatch, useSelector } from "react-redux"

export const LightModeSwitcher = ({ theme }) => {
  const dispatch = useDispatch()
  const lightMode = useSelector(getLightMode)

  return (
    <Styled.LightModeSwitcher
      theme={theme}
      onClick={() => dispatch(changeLightMode())}
    >
      {lightMode ? <>DARK &#9790;</> : <>LIGHT &#9788;</>}
    </Styled.LightModeSwitcher>
  )
}
