const lightTheme = {
  backgroundColor: "#4B6A9B",
  atrColor: "#FFFFFF",
  color: "#141d2f"
}

const darkTheme = {
  backgroundColor: "#141d2f",
  atrColor: "#1e2a47",
  color: "#FFFFFF"
}

export const getTheme = (lightMode) => {
  if(lightMode){
    return lightTheme
  }
  return darkTheme
}

