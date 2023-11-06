const SET_FILE = "SET_FILE"
const SET_CURRENT_DIR = "SET_CURRENT_DIR"

const defaultSpate = {
  file: [],
  currentDir: null
};

export default function fileReducer(state = defaultSpate, action) {
  switch (action.type) {
    case SET_FILE: return {...state, files: action.payload}
    case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
    default:
      return state;
  }
}

export const setFiles = (files) => ({type: SET_FILE, payload: files})
export const setCurrentDir = (dir) => ({type: SET_CURRENT_DIR, payload: dir})