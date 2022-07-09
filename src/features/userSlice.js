import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const searchedUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error))
}

const initialState = {
  data: {
    login: "AlenAbrahamyan",
    avatar_url: "https://avatars.githubusercontent.com/u/46008632?v=4",
    name: "Alen Abrahamyan",
    company: "Peyotto Technologies",
    blog: "",
    location: "Armenia, Yerevan",
    bio: "Software Engineer",
    twitter_username: null,
    public_repos: 27,
    followers: 4,
    following: 4,
    created_at: "2018-12-19T21:13:49Z",
  },
}

export const fetchUserData = createAsyncThunk(
  "userSlice/fetchSearchedUser",
  async (username) => {
    const response = await searchedUser(username)
    return response
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  searchedUser: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        //loading
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload
      })
  },
})

export const getUserData = (state) => state.user.data
export const isUserNotFound = (state) => state.user.data.message

export default userSlice.reducer
