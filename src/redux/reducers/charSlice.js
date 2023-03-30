import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  character: {
    health: 0,
    strength: 8,
    wisdom: 8,
    dexterity: 8,
    intelligence: 8,
    charisma: 8,
    constitution: 8,
    level: 1,
    image: "",
    darkvision: 0,
    speed: 30,
    proficiency: 2,
    name: "",
    class_type: "",
    race: "",
    armor: 8,
    initiative: 0,
    user_id: 1,
  },
};

const charSlice = createSlice({
  name: "char",
  initialState,
  reducers: {
    post(state, action) {
      action.payload;
    },
    incDex(state, action) {
      state.character.dexterity += action.payload;
    },
    incStr(state, action) {
      state.character.strength += action.payload;
    },
    incCon(state, action) {
      state.character.constitution += action.payload;
    },
    incInt(state, action) {
      state.character.intelligence += action.payload;
    },
    incWis(state, action) {
      state.character.wisdom += action.payload;
    },
    incCha(state, action) {
      state.character.charisma += action.payload;
    },
    setRace(state, action) {
      state.character.race = action.payload;
    },
    setClass(state, action) {
      state.character.class = action.payload;
    },
    VIS(state, action) {
      state.character.darkvision = action.payload;
    },
    setSpeed(state, action) {
      state.character.speed = action.payload;
    },
    setName(state, action) {
      state.character.name = action.payload;
    },
    setImage(state, action) {
      state.character.image = action.payload;
    },
    setHealth(state, action) {
      state.character.health = action.payload;
    },
    INIT(state, action) {
      state.character.initiative = action.payload;
    },
    resetChar(state, action) {
      state.character = initialState.character;
    },
    setChar(state, action) {
      state.character = action.payload;
    },
    level(state, action) {
      state.character.level++;
    },
    prof(state, action) {
      state.character.proficiency++;
    },
  },
});

export const {
  post,
  incDex,
  incStr,
  incCon,
  incInt,
  incWis,
  incCha,
  setRace,
  setClass,
  VIS,
  setSpeed,
  setName,
  setImage,
  setHealth,
  INIT,
  resetChar,
  setChar,
  level,
  prof,
} = charSlice.actions;

export default charSlice.reducer;
