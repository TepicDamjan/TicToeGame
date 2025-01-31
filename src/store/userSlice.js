import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerPick: "X",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPlayerPick: (state, action) => {
      state.playerPick = action.payload;
    },
  },
});

export const { setPlayerPick } = userSlice.actions;
export default userSlice.reducer;
