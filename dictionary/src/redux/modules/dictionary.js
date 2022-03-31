import { db } from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const UPDATE = "dictionary/UPDATE";
const DELETE = "dictionary/DELETE";

const initialState = {
  list: [
    // { word: "野良猫", pron: "のらねこ", meaning: "길고양이", eg: "野良猫や捨て猫を保護してる", check: false },
    // { word: "察する", pron: "さっする", meaning: "헤아리다, 살피다", eg: "心中を察する", check: false }
  ],
};

// Action Creators
export function loadWord(words) {
  return { type: LOAD, words };
}

export function createWord(words) {
  return { type: CREATE, words };
}

export function updateWord(word_index) {
  return { type: UPDATE, word_index };
}

export function deleteWord(word_index) {
  return { type: DELETE, word_index };
}

// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "words"));
    let word_list = [];

    word_data.forEach((word) => {
      word_list.push({ id: word.id, ...word.data() });
    });
    // console.log(word_list);
    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (list) => {
  return async function () {
    await setDoc(doc(db, "words", list.word), list);
    // await addDoc(collection(db, "words"), list);
    // const _word = await getDoc(docRef);
    // const word_data = {id: _word.id, ..._word.data()};

    // dispatch(createWord(word_data));
  };
};

export const updateWordFB = (list) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "words", list.word);
    await updateDoc(docRef, { check: !list.check });

    const word_list = getState().dictionary.list;
    const word_index = word_list.findIndex((w) => {
      return w.id === list.word;
    });
    dispatch(updateWord(word_index));
  };
};

export const deleteWordFB = (list) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "words", list.word);
    await deleteDoc(docRef);

    const word_list = getState().dictionary.list;
    const word_index = word_list.findIndex((w) => {
      return w.id === list.word;
    });
    dispatch(deleteWord(word_index));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return {
        list: action.words.sort((a, b) => a.word.localeCompare(b.word)),
      };
    }

    case "dictionary/UPDATE": {
      const new_word_list = state.list.map((l, idx) => {
        if (parseInt(action.word_index) === idx) {
          return { ...l, check: !l.check };
        } else {
          return l;
        }
      });
      return { list: new_word_list };
    }

    case "dictionary/DELETE": {
      const new_word_list = state.list.filter((l, idx) => {
        return parseInt(action.word_index) !== idx;
      });

      return { list: new_word_list };
    }

    // do reducer stuff
    default:
      return state;
  }
}
