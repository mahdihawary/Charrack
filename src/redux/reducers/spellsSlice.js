import { createSlice, fetchBaseQuery, createApi } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
  reducerPath: "user",
  initialState,
  reducers: {},
});


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})
