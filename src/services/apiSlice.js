import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query({ query: () => "/characters/1" }),
    getSkills: builder.query({ query: () => "/skills" }),
    getCharacters: builder.query({ query: () => "/users/1" }),
    getSpells: builder.query({ query: () => "/spells" }),
    getCharSpells: builder.query({ query: () => "/characters/1" }),
    getRaces: builder.query({ query: () => "/races" }),
    getClasses: builder.query({ query: () => "/class_types" }),
    postCharacter: builder.mutation({
      query: (char) => ({
        url: "/characters",
        method: "POST",
        body: JSON.stringify({
          character: {
            health: char.health,
            strength: char.strength,
            wisdom: char.wisdom,
            dexterity: char.dexterity,
            intelligence: char.intelligence,
            charisma: char.charisma,
            constitution: char.constitution,
            level: char.level,
            image: char.image,
            darkvision: char.darkvision,
            speed: char.speed,
            proficiency: char.proficiency,
            name: char.name,
            class_type: char.class_type,
            race: char.race,
            armor: char.armor,
            initiative: char.initiative,
            user_id: 1,
          },
        }),
      }),
    }),
    patchCharacter: builder.mutation({
      query: (char, charId) => ({
        url: `/characters/${charId}`,
        method: "PATCH",
        body: JSON.stringify({
          character: {
            health: char.health,
            strength: char.strength,
            wisdom: char.wisdom,
            dexterity: char.dexterity,
            intelligence: char.intelligence,
            charisma: char.charisma,
            constitution: char.constitution,
            level: char.level,
            image: char.image,
            darkvision: char.darkvision,
            speed: char.speed,
            proficiency: char.proficiency,
            name: char.name,
            class_type: char.class_type,
            race: char.race,
            armor: char.armor,
            initiative: char.initiative,
            user_id: 1,
          },
        }),
      }),
    }),
  }),
});

export const {
  useGetCharacterQuery,
  useGetCharSpellsQuery,
  useGetClassesQuery,
  useGetRacesQuery,
  useGetSkillsQuery,
  useGetCharactersQuery,
  useGetSpellsQuery,
  usePatchCharacterMutation,
  usePostCharacterMutation,
} = apiSlice;
