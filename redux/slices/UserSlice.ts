import { TOKEN_NAME } from "@/assets/enums";
import { getCookie } from "@/utils/cookies";
import { decodeToken } from "@/utils/jwt";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  id: number;
  name: string;
  username: string;
  roles: string[];
  organization_id: number;
}

const initialState: IInitialState = {
  id: 0,
  name: "",
  username: "",
  roles: [],
  organization_id: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state) {
      const token = getCookie(TOKEN_NAME);
      if (!token) {
        return state;
      }

      const decoded = decodeToken(token);
      return {
        id: decoded?.id ?? 0,
        name: decoded?.name ?? "",
        username: decoded?.username ?? "",
        roles: decoded?.roles ?? [],
        organization_id: decoded?.organization_id ?? 0,
      };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
