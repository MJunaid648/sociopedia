const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auhSlice",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.log("User friends non-existant");
      }
    },
    setPosts: (state, action) => {
      if (state.user) {
        state.posts = action.payload.posts;
      }
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((state) => {
        if (post._id === action.payload.post._id) return action.payload.post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setFriends, setLogin, setLogout, setMode, setPost, setPosts } =
  authSlice.actions;
export default authSlice.reducer;
