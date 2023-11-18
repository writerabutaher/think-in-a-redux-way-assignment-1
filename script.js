const allMatches = document.querySelector(".all-matches");
const match = document.querySelector(".match");
const addMatchBtn = document.querySelector(".lws-addMatch");
let matchNumber = 2;

const addMatch = () => {
  const newMatch = document.createElement("div");
  newMatch.classList.add("match");

  newMatch.innerHTML = `
    <div class="wrapper">
        <button class="lws-delete">
          <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match ${matchNumber}</h3>
      </div>
      <div class="inc-dec">
        <form class="incrementForm">
          <h4>Increment</h4>
          <input type="number" name="increment" class="lws-increment" />
        </form>
        <form class="decrementForm">
          <h4>Decrement</h4>
          <input type="number" name="decrement" class="lws-decrement" />
        </form>
      </div>
      <div class="numbers">
        <h2 class="lws-singleResult">0</h2>
      </div>
    `;

  allMatches.appendChild(newMatch);

  matchNumber++;
};

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = (value) => {
  return { type: INCREMENT, payload: value };
};

const decrement = (value) => {
  return { type: DECREMENT, payload: value };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

// create store
const store = createStore(counterReducer);

// render
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// render UI library
render();

// subscribe store
store.subscribe(render);

// button events listeners
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(3));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
