import {
  getCitiesListOptions,
  getDistrictsListOptions,
  getGovernoratesListOptions,
  getIndigencyTypesListOptions,
} from "@/services/ListServices";
import { IApiRes_GetListOptions } from "@/types/api_responses/IApiRes_GetListOptions";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  indigencyTypes: IApiRes_GetListOptions[] | null;
  governorates: IApiRes_GetListOptions[] | null;
  cities: IApiRes_GetListOptions[] | null;
  districts: IApiRes_GetListOptions[] | null;
}

const initialState: IInitialState = {
  indigencyTypes: [],
  governorates: [],
  cities: [],
  districts: [],
};

const optionsSlice = createSlice({
  name: "optionsLists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOptionsThunk.fulfilled, (state, action: PayloadAction<IInitialState>) => {
      state.governorates = action.payload.governorates;
      state.indigencyTypes = action.payload.indigencyTypes;
      state.cities = action.payload.cities;
      state.districts = action.payload.districts;
    });
  },
});

export const optionsActions = optionsSlice.actions;

export const fetchOptionsThunk = createAsyncThunk<IInitialState>(
  "optionsLists/fetchOptions",
  async () => {
    const governorates = await getGovernoratesListOptions();
    const indigencyTypes = await getIndigencyTypesListOptions();
    const cities = await getCitiesListOptions("31");
    const districts = await getDistrictsListOptions("215");

    return {
      governorates: governorates.data,
      indigencyTypes: indigencyTypes.data,
      cities: cities.data,
      districts: districts.data,
    };
  }
);

export default optionsSlice.reducer;
