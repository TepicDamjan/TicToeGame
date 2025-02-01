import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerPick: "X",
  vsCPU: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPlayerPick: (state, action) => {
      state.playerPick = action.payload;
    },
    setVsCpu: (state, action) => {
      state.vsCPU = action.payload;
    },
  },
});

export const { setPlayerPick , setVsCpu } = userSlice.actions;
export default userSlice.reducer;
