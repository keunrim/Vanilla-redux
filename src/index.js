import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer
const countModifier = (state, action) => {
  console.log(state, action);
  if (state === undefined) {
    return { color: "yellow" };
  }
  let color = action.color;
  if (action.type === "CHANGE_COLOR") {
    return { color: { color } };
  }
};

//store
const countStore = createStore(countModifier);

add.addEventListener("click", () => {
  countStore.dispatch({ type: "CHANGE_COLOR", color: "red" });
});

// console.log(countStore.getState());
